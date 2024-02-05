import car_temp from '../Assets/car_temp.png';
import steering from '../Assets/steering.png' 
const Temperature = ()=>{
    return (
        <div>
            <div className="absolute w-[552px] h-[685px] top-[1366px] left-[3129px]">
                <div className="relative w-[542px] h-[685px]">
                    <img
                    className="absolute w-[319px] h-[685px] top-0 left-[111px] object-cover"
                    alt="Car red"
                    src={car_temp}
                    />
                    <div className="absolute w-[120px] top-[104px] left-[422px] [font-family:'Archivo',Helvetica] font-medium text-white text-[48px] tracking-[0] leading-[normal] whitespace-nowrap">
                    37 °C
                    </div>
                    <div className="absolute w-[120px] top-[530px] left-[422px] [font-family:'Archivo',Helvetica] font-medium text-white text-[48px] tracking-[0] leading-[normal] whitespace-nowrap">
                    37 °C
                    </div>
                    <div className="absolute w-[120px] top-[104px] left-0 [font-family:'Archivo',Helvetica] font-medium text-white text-[48px] tracking-[0] leading-[normal] whitespace-nowrap">
                    39 °C
                    </div>
                    <div className="absolute w-[120px] top-[530px] left-0 [font-family:'Archivo',Helvetica] font-medium text-white text-[48px] tracking-[0] leading-[normal] whitespace-nowrap">
                    39 °C
                    </div>
                    <img
                    className="absolute w-[96px] h-[97px] top-[230px] left-[223px] object-cover"
                    alt="Element"
                    src={steering}
                    />
                    <div className="w-[84px] top-[343px] left-[235px] [font-family:'Archivo',Helvetica] font-medium text-white text-[48px] whitespace-nowrap absolute tracking-[0] leading-[normal]">
                    48 °
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Temperature;
