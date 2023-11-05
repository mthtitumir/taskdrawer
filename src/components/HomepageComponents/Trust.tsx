import Image from "next/image";

const Trust = () => {
    const links = [
        { name: 'Google', logo: 'https://i.ibb.co/9nqpDvs/google.png' },
        { name: 'YouTube', logo: 'https://i.ibb.co/rQcGkPs/yt.png' },
        { name: 'Facebook', logo: 'https://i.ibb.co/mSHRznK/facebook.png' },
        { name: 'Twitter', logo: 'https://i.ibb.co/FX4PXpr/twitter.png' },
        { name: 'Amazon', logo: 'https://i.ibb.co/BsjZmx4/amazon.png' },
        { name: 'InstaGram', logo: 'https://i.ibb.co/PMWz8sS/insta.png' },
        { name: 'Discord', logo: 'https://i.ibb.co/5MYDRXv/discord.png' },
        { name: 'Telegram', logo: 'https://i.ibb.co/7VNKLny/telegram.png' },
        { name: 'WhatsApp', logo: 'https://i.ibb.co/fvP293L/whatsapp.png' },
        { name: 'Reddit', logo: 'https://i.ibb.co/y6Qjxfc/raddit.png' },
    ]
    return (
        <div className="c-auto">
            <h1 className="text-4xl text-center">They Trust Us</h1>
            <div className="grid grid-cols-5 justify-between gap-5 mt-5" >
                {
                    links.map(link => <div className="fji gap-5 border rounded-lg py-3" key={link.name}>
                        <Image alt="logo" src={link.logo} width={40} height={40} />
                        <h1>{link.name}</h1>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Trust