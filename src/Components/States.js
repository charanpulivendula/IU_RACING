import wrong from '../Assets/wrong.png';
const States = ()=>{
    return (
        <div>
            <div className="absolute w-[746px] h-[202px] top-[1367px] left-[2298px]">
                <div className="absolute w-[514px] h-[149px] top-[53px] left-[226px] rounded-[12px]">
                    <div className="w-[514px] h-[149px] opacity-10 absolute top-0 left-0 bg-white rounded-[12px]" />
                    <div className="absolute w-[328px] top-[31px] left-[46px] [font-family:'Archivo',Helvetica] font-light text-white text-[40px] tracking-[0] leading-[normal]">
                    Caution: <br />
                    Ready to Drive
                    </div>
                </div>
                <div className="absolute w-[149px] h-[149px] top-[53px] left-[42px] rounded-[12px]">
                    <div className="absolute w-[149px] h-[149px] top-0 left-0 bg-white rounded-[12px] opacity-10" />
                    <div className="top-[25px] left-[41px] [font-family:'Michroma',Helvetica] font-normal text-white text-[70px] absolute tracking-[0] leading-[normal]">
                    8
                    </div>
                </div>
                <div className="absolute top-0 left-0 [font-family:'Archivo',Helvetica] font-normal text-white text-[36px] tracking-[0] leading-[normal] whitespace-nowrap">
                    CT State
                </div>
                </div>
                <div className="absolute w-[744px] h-[204px] top-[1595px] left-[2298px]">
                <div className="absolute w-[514px] h-[149px] top-[55px] left-[226px] rounded-[12px]">
                    <div className="w-[514px] h-[149px] opacity-10 absolute top-0 left-0 bg-white rounded-[12px]" />
                    <p className="absolute w-[434px] top-[31px] left-[46px] [font-family:'Archivo',Helvetica] font-light text-white text-[40px] tracking-[0] leading-[normal]">
                    All estimation, location, localization are wrong
                    </p>
                </div>
                <div className="absolute w-[149px] h-[149px] top-[55px] left-[42px] rounded-[12px]">
                    <div className="absolute w-[149px] h-[149px] top-0 left-0 bg-white rounded-[12px] opacity-10" />
                    <img
                    className="absolute w-[86px] h-[86px] top-[32px] left-[32px]"
                    alt="Group"
                    src={wrong}
                    />
                </div>
                <div className="absolute top-0 left-0 [font-family:'Archivo',Helvetica] font-normal text-white text-[36px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Heartbeat
                </div>
                </div>
                <div className="absolute w-[746px] h-[202px] top-[1822px] left-[2298px]">
                <div className="absolute w-[514px] h-[149px] top-[53px] left-[226px] rounded-[12px]">
                    <div className="w-[514px] h-[149px] opacity-10 absolute top-0 left-0 bg-white rounded-[12px]" />
                    <div className="absolute top-[31px] left-[46px] [font-family:'Archivo',Helvetica] font-light text-white text-[40px] tracking-[0] leading-[normal]">
                    Actuator test done
                    <br />
                    (engine ready)
                    </div>
                </div>
                <div className="absolute w-[149px] h-[149px] top-[53px] left-[42px] rounded-[12px]">
                    <div className="absolute w-[149px] h-[149px] top-0 left-0 bg-white rounded-[12px] opacity-10" />
                    <div className="top-[25px] left-[40px] [font-family:'Michroma',Helvetica] font-normal text-white text-[70px] absolute tracking-[0] leading-[normal]">
                    4
                    </div>
                </div>
                <div className="absolute top-0 left-0 [font-family:'Archivo',Helvetica] font-normal text-white text-[36px] tracking-[0] leading-[normal] whitespace-nowrap">
                    System
                </div>
            </div>
        </div>
    );
}

export default States;