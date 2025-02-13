export default function FewOrbitAnimation() {
    return (
        <section>
            <div
                className="h-[5px] w-[5px] absolute top-[20%] left-[10%] rounded-full bg-gradient-to-r from-red-500 to-[#e1a202] 
                        animate-[orbit2_16s_linear_infinite_alternate]"
            ></div>
            <div
                className="h-[12px] w-[12px] absolute top-[60%] left-[30%] rounded-full bg-gradient-to-r from-red-500 to-[#e1a202] 
                        animate-[orbit2_16s_linear_infinite_alternate] z-30"
            ></div>
            <div
                className="h-[2px] w-[2px] absolute top-[80%] left-[5%] rounded-full bg-gradient-to-r from-red-500 to-[#e1a202] 
                        animate-[orbit2_15s_linear_infinite_alternate] z-30"
            ></div>
            <div
                className="h-[2px] w-[2px] absolute top-[20%] left-[5%] rounded-full bg-gradient-to-r from-red-500 to-[#e1a202] 
                        animate-[orbit1_14s_linear_infinite_alternate] z-30"
            ></div>
            <div
                className="h-[2px] w-[2px] absolute top-[30%] left-[50%] rounded-full bg-gradient-to-r from-red-500 to-[#e1a202] 
                        animate-[orbit1_16s_linear_infinite_alternate] z-30"
            ></div>
            <div
                className="h-[5px] w-[5px] absolute top-[60%] left-[50%] rounded-full bg-gradient-to-r from-red-500 to-[#e1a202] 
                        animate-[orbit1_17s_linear_infinite_alternate] z-30"
            ></div>

            <div
                className="h-[10px] w-[10px] absolute top-[30%] left-[80%] rounded-full bg-gradient-to-r from-red-500 to-[#e1a202] 
                        animate-[orbit1_16s_linear_infinite_alternate] z-30"
            ></div>

            <div
                className="h-[3px] w-[3px] absolute top-[20%] left-[90%] rounded-full bg-gradient-to-r from-red-500 to-[#e1a202] 
                        animate-[orbit2_17s_linear_infinite_alternate] z-30"
            ></div>
            <div
                className="h-[5px] w-[5px] absolute top-[80%] left-[85%] rounded-full bg-gradient-to-r from-red-500 to-[#e1a202] 
                        animate-[orbit2_16s_linear_infinite_alternate] z-30"
            ></div>

        </section>
    );
}
