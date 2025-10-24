import logo from "../assets/logo.jpg";

function ProjectInfo() {
    return (
        <div className="bg-slate-400 h-full">
            {/* head */}
            <div className="flex gap-3 px-3 h-[70px] bg-slate-500 items-center">
                <img className="w-[40px] rounded" src={logo} alt="" />
                <span className="font-semibold text-white text-lg">Vzware</span>
            </div>
            {/* time and des */}
            <div className="flex   gap-10 p-3">
                <div className="flex-1 flex flex-col gap-3">
                    <h2 className="font-semibold text-white text-lg">Mo ta</h2>
                    <div className="bg-gray-100 rounded p-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloribus sapiente possimus eligendi, fugit repudiandae
                        inventore alias obcaecati, nisi impedit voluptatibus
                        repellat? Perferendis eos quidem maxime vero vel aliquam
                        totam consectetur.
                    </div>
                </div>

                <div className="flex-1 flex flex-col gap-5">
                    <h2 className="font-semibold text-white">Time</h2>
                    <span className="flex justify-between bg-gray-50 p-3 rounded">
                        <p>Thoi gian bat dau</p>
                        <p>20-5-2025</p>
                    </span>
                    <span className="flex justify-between bg-blue-100 p-3 rounded">
                        <p>Thoi gian ket thuc</p>
                        <p>20-8-2025</p>
                    </span>
                </div>
            </div>

            {/* member */}
            <div>
                <h2>Thanh vien</h2>
                <div></div>
            </div>
        </div>
    );
}

export default ProjectInfo;
