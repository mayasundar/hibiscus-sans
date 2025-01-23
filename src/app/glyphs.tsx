"use client";
import glyph from "./glyphs.module.css";
import {useState} from "react";
import Canvas from "./canvas";


const glyphs = {
    Uppercase: [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ],
    Lowercase: [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ],
    Numbers: [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ],
    Punctuation: [
        '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/',
        ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|',
        '}', '~'
    ],

};

export function Glyphs() {
    const [selectedChar, setSelectedChar] = useState('A');

    return (
        <div className={glyph.display}>
            <div className={glyph.characterDisplay}>
                <div className={glyph.selectedChar}>
          <span className={glyph.characterSmall}>
            {selectedChar}
          </span>
                    <div className={glyph.unicodeValue}>
                        Unicode: U+{selectedChar.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0')}
                    </div>
                </div>

                <div className={glyph.canvas}>
                    <Canvas/>
                </div>


                <span className={glyph.characterLarge} style={{
                    position: 'absolute',
                    top: '0px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '500px',
                    pointerEvents: 'none'
                }}>
          {selectedChar}
                    </span>
                <div className={glyph.anatomy} style={{ position: 'absolute', top: '75px', fontSize: '12px', pointerEvents: 'none' }}>
                    <span>ascender</span>
                    <span>732</span>
                </div>
                <div className={glyph.anatomy} style={{ position: 'absolute', top: '180px', fontSize: '12px', pointerEvents: 'none' }}>
                    <span>x-height</span>
                    <span>525</span>
                </div>
                <div className={glyph.anatomy} style={{ position: 'absolute', top: '440px', fontSize: '12px', pointerEvents: 'none' }}>
                    <span>baseline</span>
                    <span>0</span>
                </div>
                <div className={glyph.anatomy} style={{ position: 'absolute', top: '545px', fontSize: '12px', pointerEvents: 'none' }}>
                    <span>descender</span>
                    <span>-220</span>
                </div>

            </div>

            <div className={glyph.characterSets}>
                {Object.entries(glyphs).map(([setName, chars]) => (
                    <div key={setName} className={glyph.characterSet}>
                        <div className={glyph.characterSetTxt}>{setName}</div>
                        <div className={glyph.characterGrid}>
                            {chars.map((char) => (
                                <button
                                    key={char}
                                    className={glyph.gridCell}
                                    onClick={() => setSelectedChar(char)}
                                >
                                    <span className={glyph.character}>{char}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Glyphs;