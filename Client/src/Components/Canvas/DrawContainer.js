import React, {useState, useRef, useEffect } from 'react'
import {BsTrash} from 'react-icons/bs'

function Container({utensil}) {
    const {tool, weight, color} = utensil;
    const magic = {
        width: "790px",
        height:"600px",
        backgroundColor: "white",
        border: "5px solid rgb(207, 207, 207)",
        borderStyle: "groove",
        cursor: "pointer"
    }

    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)

    useEffect(()=> {
        const canvas = canvasRef.current;
        canvas.width =1580;
        canvas.height = 1200;
        canvas.style.width = "790px";
        canvas.style.height = "600px";

        const context = canvas.getContext("2d")
        context.scale(2,2)
        context.lineCap = "round"
        context.strokeStyle = `${color}`
        context.lineWidth = 5
        contextRef.current = context;
    },[])

    function mouseDown({nativeEvent}){
        if (tool === "bucket"){
            const ctx = canvasRef.current.getContext("2d")
            ctx.beginPath()
            ctx.fillStyle = `${color}`
            ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        } else if (tool === "brush"){
            const {offsetX, offsetY} = nativeEvent
            contextRef.current.beginPath()
            contextRef.current.moveTo(offsetX,offsetY)
            canvasRef.current.getContext("2d").strokeStyle = color
            canvasRef.current.getContext("2d").lineWidth = weight
            setIsDrawing(true)

        } else{
            const {offsetX, offsetY} = nativeEvent
            contextRef.current.beginPath()
            contextRef.current.moveTo(offsetX,offsetY)
            canvasRef.current.getContext("2d").strokeStyle = "white"
            canvasRef.current.getContext("2d").lineWidth = 10
            setIsDrawing(true)
        }
    }

    function mouseUp(){
        contextRef.current.closePath()
        setIsDrawing(false)
    }

    function draw({nativeEvent}){
        if(!isDrawing){
            return
        }
        const {offsetX, offsetY} = nativeEvent
        contextRef.current.lineTo(offsetX,offsetY)
        contextRef.current.stroke()
    }
    function resetCanvas(){
        canvasRef.current.getContext("2d").fillStyle="white";
        canvasRef.current.getContext("2d").fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }

    function download(){
        const canvas = document.getElementById("canvas");
        const url = canvas.toDataURL("image/png");
        const link = document.createElement('a');
        link.download = 'paint.png';
        link.href = url;
        link.click();
    }

    return (
        <>
            <canvas id="canvas" style={magic} 
                onMouseDown={mouseDown} 
                onMouseUp={mouseUp} 
                onMouseMove={draw}
                ref={canvasRef}
            />
            <p style={{width:"fit-content", margin:"10px auto"}}>
            <button id="trash-icon" title="Clear the board" onClick={resetCanvas}><BsTrash className='react-icon-tool'/></button>
                <button onClick={download}>Click here</button> to download your masterpiece.
            </p>
        </>
    );
}

export default Container
