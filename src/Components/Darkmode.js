import sun from '../Assets/sun_mode.png';
const Darkmode = ()=>{
    return (
        <div>
            <div className="absolute w-[140px] h-[140px] top-[132px] left-[721px] bg-nature-2 rounded-[70px]">
                <img
                    className="absolute w-[95px] h-[96px] top-[32px] left-[33px] object-cover"
                    alt="Sun"
                    src={sun}
                />
            </div>
        </div>
    );
}

export default Darkmode;