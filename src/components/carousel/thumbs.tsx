
interface thumbsStuff {
    ids: Array<number>;
    setThumb: (id: number) => void;
    currentIndex: number;
}

export default function Thumbs({ ids, setThumb, currentIndex }: thumbsStuff) {

    return (
        <div id="thumbs" className="text-center min-h-9">{ids.map((id) => (
            <div key={id}
                onClick={() => setThumb(id)}
                tabIndex={0}
                className={`inline-block my-3 mx-0.5 w-3.75 h-1 rounded-xs transition-colors duration-200 bg-[hsla(202,60%,100%,0.2)] cursor-pointer 
                           ${currentIndex === id ? "bg-[hsla(202,60%,100%,0.4)]" : ""}`}>
            </div>
        ))};
        </div>
    )
}