export const NewsLetter = () => {
    return (
        <>
            <div className="container max-w-full bg-[#191919] h-[17rem] flex flex-col justify-center items-center text-center">
                <div className="content flex flex-col gap-6 items-center justify-center max-w-[1200px] w-full mx-auto my-[6rem] px-5">
                    <h3 className="news-heading text-white text-3xl font-extrabold">Newsletter</h3>
                    <div className="input-div">
                        <form className="flex justify-center items-center gap-2">
                            <input type="email" name="email" id="email" placeholder="your@example.com" className="py-1 px-2 outline-none rounded-sm" />
                            <button className="rounded-sm text-black py-1 px-3 font-medium bg-slate-50">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
