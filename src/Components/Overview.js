import logo from '../Assets/logo.svg';
import track_flag_red from '../Assets/track-flag-red.png';
import track_flag_grey from '../Assets/track-flag-grey.png';
import LapData from './LapData';
const Overview = ()=>{
    return (
        <div>
            <img
            className="absolute w-[166px] h-[223px] top-[140px] left-[275px]"
            alt="Vector"
            src={logo}
            />
            <div className="absolute w-[471px] h-[269px] top-[436px] left-[149px]">
                <div className="absolute top-0 left-0 [font-family:'Michroma',Helvetica] font-normal text-white text-[48px] tracking-[0] leading-[normal]">
                    Italy Grand Pix
                </div>
                <p className="top-[169px] left-0 [font-family:'Michroma',Helvetica] font-normal text-white text-[70px] absolute tracking-[0] leading-[normal]">
                    12 : 29 : 32
                </p>
                <div className="top-[106px] left-[106px] [font-family:'Michroma',Helvetica] font-normal text-[#b0b0b0] text-[36px] absolute tracking-[0] leading-[normal]">
                    27 ºC
                </div>
                <div className="absolute w-[74px] h-[51px] top-[106px] left-[8px]">
                    <div className="relative w-[82px] h-[55px] -left-px">
                    <div className="absolute w-[34px] h-[34px] top-0 left-[35px] bg-[#ffa96c] rounded-[17px]" />
                    <img
                        className="absolute w-[82px] h-[55px] top-0 left-0"
                        alt="Union"
                        src="https://c.animaapp.com/IFYG8yp8/img/union.svg"
                    />
                    </div>
                </div>
            </div>
            <LapData/>
                <div className="absolute w-[387px] h-[287px] top-[1758px] left-[149px]">
                <div className="absolute w-[355px] h-[129px] top-0 left-0">
                    <img
                    className="absolute w-[119px] h-[131px] top-0 left-[-2px]"
                    alt="Track flag"
                    src={track_flag_red}
                    />
                    <div className="absolute top-[20px] left-[167px] [font-family:'Archivo',Helvetica] font-medium text-[#f0f0f0] text-[40px] tracking-[0] leading-[normal]">
                    Track Flag
                    <br />: Stop
                    </div>
                </div>
                <div className="absolute w-[389px] h-[129px] top-[158px] left-0">
                    <img
                    className="absolute w-[119px] h-[131px] top-0 left-[-2px]"
                    alt="Track flag"
                    src={track_flag_grey}
                    />
                    <div className="absolute top-[20px] left-[167px] [font-family:'Archivo',Helvetica] font-medium text-[#f0f0f0] text-[40px] tracking-[0] leading-[normal]">
                    Vehicle Flag
                    <br />: Engine Kill
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview;