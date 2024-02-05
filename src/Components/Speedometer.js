import progress_circle from '../Assets/progress_circle.svg';
import marker from '../Assets/marker.svg';
import line from '../Assets/line_speedometer.svg';
import ChangingProgressProvider from './ChangingProgressProvider';
import {
    CircularProgressbar,
    buildStyles,
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
const Speedometer = ()=>{
    return (
        <div>
            <div className="absolute w-[874px] h-[849px] top-[136px] left-[2821px]">
                <div className="absolute w-[874px] h-[849px] top-0 left-0">
                    <div className="absolute w-[785px] h-[849px] top-0 left-0">
                        <div className="absolute w-[785px] h-[820px] top-0 left-0">
                            <div className="top-[768px] left-[210px] [font-family:'Archivo',Helvetica] font-normal text-white text-[48px] text-center whitespace-nowrap absolute tracking-[0] leading-[normal]">
                            10
                            </div>
                            <div className="absolute w-[785px] h-[783px] top-0 left-0">
                                <div className="relative w-[783px] h-[763px] bg-[100%_100%]">
                                    {/* <img
                                    className="absolute w-[283px] h-[705px] top-[58px] left-[2px]"
                                    alt="Ellipse"
                                    src="https://c.animaapp.com/IFYG8yp8/img/ellipse-193@4x.png"
                                    /> */}
                                    <ChangingProgressProvider values={[0, 20, 40 , 70, 80, 100]}>
                                        {(value) => (
                                        <CircularProgressbar
                                            value={value}
                                            circleRatio={0.94}
                                            styles={buildStyles({
                                            rotation: 43 / 100 + 1 / 8,
                                            strokeLinecap: "butt",
                                            trailColor: "#000",
                                            pathColor: "#cf1616",
                                            })}
                                        />
                                        )}
                                    </ChangingProgressProvider>
                                    <img
                                    className="absolute w-[692px] h-[692px] top-[44px] left-[48px]"
                                    alt="Ellipse"
                                    src={progress_circle}
                                    />
                                </div>
                            </div>
                            <div className="absolute w-[530px] h-[565px] top-[73px] left-[130px]">
                                <div className="absolute w-[524px] h-[461px] top-[7px] left-0">
                                    <img
                                    className="absolute w-[206px] h-[329px] top-0 left-[69px]"
                                    alt="Vector"
                                    src={marker}
                                    />
                                    <div className="w-[524px] top-[135px] left-0 [font-family:'Michroma',Helvetica] font-normal text-white text-[270px] text-center absolute tracking-[0] leading-[normal]">
                                    87
                                    </div>
                                    <div className="absolute top-[117px] left-[155px] [font-family:'Archivo',Helvetica] font-normal text-white text-[64px] tracking-[0] leading-[normal] whitespace-nowrap">
                                    Current
                                    </div>
                                </div>
                                <div className="absolute top-[513px] left-[208px] [font-family:'Archivo',Helvetica] font-normal text-white text-[48px] tracking-[0] leading-[normal] whitespace-nowrap">
                                    km/h
                                </div>
                            </div>
                        </div>
                        <div className="top-[797px] left-[352px] [font-family:'Archivo',Helvetica] font-normal text-white text-[48px] text-center whitespace-nowrap absolute tracking-[0] leading-[normal]">
                            300
                        </div>
                    </div>
                    <div className="top-[540px] left-[785px] [font-family:'Archivo',Helvetica] font-normal text-white text-[48px] text-center whitespace-nowrap absolute tracking-[0] leading-[normal]">
                    250
                    </div>
                </div>
                <img
                    className="absolute w-[5px] h-[57px] top-[723px] left-[393px]"
                    alt="Line"
                    src={line}
                />
            </div>
            <div className="inline-flex flex-col items-start gap-[64px] absolute top-[154px] left-[2298px]">
                <div className="relative w-[324px] h-[518px]">
                    <div className="absolute w-[328px] h-[239px] top-[279px] left-0">
                        <div className="absolute top-0 left-0 [font-family:'Archivo',Helvetica] font-normal text-white text-[64px] tracking-[0] leading-[normal] whitespace-nowrap">
                            Maximum
                        </div>
                        <div className="top-[83px] left-0 [font-family:'Michroma',Helvetica] font-normal text-white text-[110px] text-center absolute tracking-[0] leading-[normal]">
                            249
                        </div>
                    </div>
                    <div className="absolute w-[270px] h-[239px] top-0 left-0">
                        <div className="absolute top-0 left-0 [font-family:'Archivo',Helvetica] font-normal text-white text-[64px] tracking-[0] leading-[normal] whitespace-nowrap">
                            Minimum
                        </div>
                        <div className="top-[83px] left-0 [font-family:'Michroma',Helvetica] font-normal text-white text-[110px] text-center absolute tracking-[0] leading-[normal]">
                            15
                        </div>
                    </div>
                </div>
                <div className="relative w-[324px] h-[239px]">
                    <div className="absolute top-0 left-0 [font-family:'Archivo',Helvetica] font-normal text-white text-[64px] tracking-[0] leading-[normal] whitespace-nowrap">
                    RPM
                    </div>
                    <div className="top-[83px] left-0 [font-family:'Michroma',Helvetica] font-normal text-white text-[110px] text-center absolute tracking-[0] leading-[normal]">
                    995
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Speedometer;