import racing_map from '../Assets/racing_map.png';
const RacingMap = ()=>{
    return (
        <div className="absolute w-[1399px] h-[1716px] top-[332px] left-[719px]">
          {/* racing zoom */}
            <img
                className="absolute w-[1399px] h-[1042px] top-0 left-0"
                alt="Mask group"
                src="https://c.animaapp.com/IFYG8yp8/img/mask-group.png"
            />
            <div className="absolute w-[718px] h-[152px] top-[784px] left-[33px]">
                <div className="absolute w-[216px] h-[61px] top-[91px] left-[168px] rounded-[12px]">
                    <div className="absolute w-[216px] h-[61px] top-0 left-0 bg-white rounded-[12px] opacity-10" />
                        <div className="top-[9px] left-[34px] [font-family:'Archivo',Helvetica] font-bold text-white text-[40px] whitespace-nowrap absolute tracking-[0] leading-[normal]">
                            103 kph
                        </div>
                </div>
            <div className="absolute w-[216px] h-[61px] top-0 left-[168px] rounded-[12px]">
                <div className="absolute w-[216px] h-[61px] top-0 left-0 bg-white rounded-[12px] opacity-10" />
                    <div className="top-[9px] left-[34px] [font-family:'Archivo',Helvetica] font-bold text-white text-[40px] whitespace-nowrap absolute tracking-[0] leading-[normal]">
                        163 kph
                    </div>
                </div>
            <div className="absolute w-[188px] h-[61px] top-0 left-[406px] rounded-[12px]">
                <div className="absolute w-[188px] h-[61px] top-0 left-0 bg-white rounded-[12px] opacity-10" />
                    <div className="top-[9px] left-[37px] [font-family:'Archivo',Helvetica] font-normal text-white text-[40px] whitespace-nowrap absolute tracking-[0] leading-[normal]">
                        -1.104
                    </div>
            </div>
            <div className="absolute w-[90px] h-[61px] top-0 left-[616px] rounded-[12px]">
                <div className="absolute w-[90px] h-[61px] top-0 left-0 bg-white rounded-[12px] opacity-50" />
                    <div className="top-[9px] left-[16px] [font-family:'Archivo',Helvetica] font-bold text-black text-[40px] whitespace-nowrap absolute tracking-[0] leading-[normal]">
                        0.7
                    </div>
            </div>
            <div className="absolute w-[16px] h-[61px] top-[91px] left-0 bg-[#f20000]" />
                <div className="absolute w-[16px] h-[61px] top-0 left-0 bg-[#2b64ff]" />
                    <div className="top-[9px] left-[32px] font-bold text-[40px] absolute [font-family:'Archivo',Helvetica] text-white tracking-[0] leading-[normal] whitespace-nowrap">
                    OPP4
                    </div>
                    <div className="top-[100px] left-[32px] font-bold text-[40px] absolute [font-family:'Archivo',Helvetica] text-white tracking-[0] leading-[normal] whitespace-nowrap">
                    IU
                    </div>
                </div>
            <img
                className="absolute w-[1399px] h-[700px] top-[1016px] left-0"
                alt="Group"
                src={racing_map}
            />
            <img
                className="absolute w-[39px] h-[39px] top-[408px] left-[988px]"
                alt="Polygon"
                src="https://c.animaapp.com/IFYG8yp8/img/polygon-3.svg"
            />
        </div>
    )
}
export default RacingMap;