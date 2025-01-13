"use client";
import {useState} from "react";
import tester from "./tester.module.css"

export function Tester(){
    const [fontSize, setFontSize] = useState(24);
    const [biggerFontSize, setBiggerFontSize] = useState(36);
    const [biggestFontSize, setBiggestFontSize] = useState(48);

    const adjustFontSize = (setter: React.Dispatch<React.SetStateAction<number>>, increment: boolean) => {
        setter(prev => prev + (increment ? 8 : -8));
    };
    const sampleText = (
        <blockquote contentEditable={true} suppressContentEditableWarning={true} autoCapitalize={"off"} autoCorrect={"off"} spellCheck={false}>
            <p>Exquisite petals glow in the evening sky. Jazzy monarch butterflies dance nearby.</p>
        </blockquote>
    );

    return(
        <div>
            <div className={tester.textArea}>
                <div className={tester.textBlocks}>

                <div className={tester.textBlock}>

                    <div style={{fontSize: `${biggestFontSize}px`}}>
                        <div className={tester.toolbar}>
                            <div className={tester.sizeValue}>
                                <button className={tester.fontSize} onClick={() => adjustFontSize(setBiggestFontSize, true)}>+</button>
                                <div>{biggestFontSize} px</div>
                                <button className={tester.fontSize} onClick={() => adjustFontSize(setBiggestFontSize, false)}>-</button>
                            </div>
                        </div>

                        {sampleText}
                    </div>
                </div>
                <div className={tester.textBlock}>

                    <div style={{fontSize: `${biggerFontSize}px`}}>
                        <div className={tester.toolbar}>
                            <div className={tester.sizeValue}>
                                <button className={tester.fontSize} onClick={() => adjustFontSize(setBiggerFontSize, true)}>+</button>
                                <div>{biggerFontSize} px</div>
                                <button className={tester.fontSize} onClick={() => adjustFontSize(setBiggerFontSize, false)}>-</button>
                            </div>
                        </div>

                        {sampleText}
                    </div>


                    <div style={{fontSize: `${fontSize}px`}}>
                        <div className={tester.toolbar}>
                            <div className={tester.sizeValue}>
                                <button className={tester.fontSize} onClick={() => adjustFontSize(setFontSize, true)}>+</button>
                                <div>{fontSize} px</div>
                                <button className={tester.fontSize} onClick={() => adjustFontSize(setFontSize, false)}>-</button>
                            </div>
                        </div>

                        {sampleText}
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Tester;
