import progress_circle from '../Assets/progress_circle.svg';
import Temperature from "./Temperature";
import Speedometer from "./Speedometer";
import States from './States';

const Contollables = ()=>{
    return (
        <div>
            <Speedometer/>
            <div className="absolute w-[274px] h-[270px] top-[1046px] left-[2318px]">
                <div className="relative w-[242px] h-[270px]">
                    <div className="absolute top-[69px] left-[71px] [font-family:'Archivo',Helvetica] font-normal text-white text-[36px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Throttle
                    </div>
                    <div className="top-[88px] left-[79px] [font-family:'Michroma',Helvetica] font-normal text-white text-[72px] absolute tracking-[0] leading-[normal]">
                    11
                    </div>
                    <img
                    className="absolute w-[211px] h-[210px] top-[30px] left-[31px]"
                    alt="Ellipse"
                    src="https://c.animaapp.com/IFYG8yp8/img/ellipse-191-1.svg"
                    />
                    <img
                    className="absolute w-[155px] h-[270px] top-0 left-0"
                    alt="Ellipse"
                    src="https://c.animaapp.com/IFYG8yp8/img/ellipse-192-1.svg"
                    />
                </div>
            </div>
            <div className="absolute w-[274px] h-[270px] top-[1046px] left-[2684px]">
                <div className="relative w-[270px] h-[270px]">
                    <div className="absolute top-[83px] left-[91px] [font-family:'Archivo',Helvetica] font-normal text-white text-[36px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                    Brake
                    </div>
                    <div className="top-[102px] left-[103px] [font-family:'Michroma',Helvetica] font-normal text-white text-[72px] text-center absolute tracking-[0] leading-[normal]">
                    3
                    </div>
                    <div className="absolute w-[270px] h-[270px] top-0 left-0">
                    <div className="relative w-[223px] h-[237px] top-[33px] left-[21px]">
                        <img
                        className="w-[114px] h-[81px] top-[157px] absolute left-0"
                        alt="Ellipse"
                        src="https://c.animaapp.com/IFYG8yp8/img/ellipse-192-2.svg"
                        />
                        <img
                        className="absolute w-[212px] h-[208px] top-0 left-[12px]"
                        alt="Ellipse"
                        src="https://c.animaapp.com/IFYG8yp8/img/ellipse-191-2.svg"
                        />
                    </div>
                    </div>
                </div>
            </div>
            <div className="absolute w-[267px] h-[263px] top-[1046px] left-[3050px]">
                <div className="relative w-[263px] h-[263px]">
                    <div className="absolute top-[76px] left-[91px] [font-family:'Archivo',Helvetica] font-normal text-[#f0f0f0] text-[36px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                    Gear
                    </div>
                    <div className="top-[95px] left-[95px] [font-family:'Michroma',Helvetica] font-normal text-[#f0f0f0] text-[72px] text-center absolute tracking-[0] leading-[normal]">
                    5
                    </div>
                    <div className="absolute w-[263px] h-[263px] top-0 left-0">
                        <div className="relative w-[238px] h-[263px]">
                            <img
                            className="absolute w-[177px] h-[263px] top-0 left-0"
                            alt="Ellipse"
                            src="https://c.animaapp.com/IFYG8yp8/img/ellipse-193-1.svg"
                            />
                            <img
                            className="absolute w-[211px] h-[211px] top-[26px] left-[27px]"
                            alt="Ellipse"
                            src={progress_circle}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute w-[274px] h-[270px] top-[1046px] left-[3409px]">
                <div className="relative w-[270px] h-[270px]">
                    <div className="top-[100px] left-[71px] [font-family:'Michroma',Helvetica] font-normal text-white text-[64px] text-center absolute tracking-[0] leading-[normal]">
                    26
                    </div>
                    <div className="absolute top-[70px] left-[79px] [font-family:'Archivo',Helvetica] font-normal text-white text-[36px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                    Comm.
                    </div>
                    <div className="absolute w-[270px] h-[270px] top-0 left-0">
                        <div className="relative w-[244px] h-[237px] top-[33px]">
                            <img
                            className="w-[135px] h-[147px] top-[90px] absolute left-0"
                            alt="Ellipse"
                            src="https://c.animaapp.com/IFYG8yp8/img/ellipse-192-3.svg"
                            />
                            <img
                            className="absolute w-[212px] h-[208px] top-0 left-[33px]"
                            alt="Ellipse"
                            src={progress_circle}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <States/>
            <Temperature/>
        </div>
    )
}
export default Contollables;