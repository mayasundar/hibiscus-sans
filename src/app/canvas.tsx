import {useEffect, useRef} from "react";
import canvas from "./canvas.module.css";

interface LineStyle {
    color?: string;
    width?: number;
}
interface Info{
    x: number;
    y: number;
    x1: number;
    y1: number;

}

export function Canvas() {
    const canvas = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvas.current) return;
        const ctx = canvas.current.getContext("2d");
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.current!.width, canvas.current!.height);
        // capheight/ascender: 732
        // x height: 525
        // baseline: 0
        // descender: -220
        drawLine(ctx, {x: 0, y: 40, x1: 500, y1: 40}); // ascender
        drawLine(ctx, {x: 0, y: 145, x1: 500, y1: 145}); // x height
        drawLine(ctx, {x: 0, y: 405, x1: 500, y1: 405}); // baseline
        drawLine(ctx, {x: 0, y: 510, x1: 500, y1: 510}); // descender

    }, []);

    const drawLine = (ctx: CanvasRenderingContext2D, info: Info , style:LineStyle = {}) => {
        const {x, y, x1, y1} = info;
        const {color = '#a90636', width = 0.25} = style;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x1, y1);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
    }

    return (
        <div className={canvas.canvas}>
            <canvas ref={canvas} width={500} height={520}/>
        </div>
    );
}

export default Canvas;