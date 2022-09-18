const Footer = () => {
    return(
        <div className="footer z-0">
            <div className="bg-darkPurple flex flex-row justify-start gap-40 px-60 py-20 ">
                <div className="flex flex-col justify-center items-start">
                    <img className="h-41px w-72px mb-5" src={`https://file.rendit.io/n/rfFlJa8QUyjw2AG0vFnk.png`}/>
                    <div className="text-sm font-urban text-white leading-6 mb-5 self-center">
                        Lorem ipsum dolor sit amet,consectetur
                        <br />
                        adipisicing elit. Quis non, fugit totam vel
                        <br />
                        laboriosam vitae.
                    </div>
                    <div className="flex flex-grow gap-3 justify-center items-center">
                        <div className="h-60px bg-lowPurple flex flex-col justify-center items-center p-2 rounded-lg">
                            <img className="w-24px h-24px" src={`https://file.rendit.io/n/fuxt0JKvbtAMYby4xydG.svg`}/>
                        </div>
                        <div className="h-60px bg-lowPurple flex flex-col justify-center items-center p-2 rounded-lg ">
                            <img className="w-24px h-24px" src={`https://file.rendit.io/n/7TZbeUACJvOqQ9H1cHqI.svg`}/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start mt-10 px-4 gap-5">
                    <div className="font-urban font-bold text-lg text-white">Project</div>
                    <div className="font-urban text-sm text-white">About Us</div>
                    <div className="font-urban text-sm text-white">Contact Us</div>
                    <div className="font-urban text-sm text-white">Discover</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;