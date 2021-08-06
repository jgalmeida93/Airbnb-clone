import { HeartIcon } from "@heroicons/react/solid";

function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>Accessibility</p>
          <p>This is not a real site</p>
          <p>It's a pretty awesome clone</p>
          <p>Inspired by Papa React</p>
          <p>Another Link</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">HOST</h5>
          <p>Jonas Gabriel</p>
          <p>Presents</p>
          <p>Linkedin</p>
          <p>Instagram</p>
          <p>Facebook</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">SUPPORT</h5>
          <p>Help Centre</p>
          <p>Trust & Safety</p>
          <p>Say Hi Youtube</p>
          <p>Easter Eggs</p>
          <p>For the Win</p>
        </div>
      </div>
      <div className="bg-gray-200 text-sm text-center flex items-center justify-center">
        <span className="flex mr-3 text-gray-600">
          Made with <HeartIcon className="ml-1 h-4 text-red-400" />
        </span>
        |<span className="ml-3 text-gray-600">Jonas Gabriel - {year}</span>
      </div>
    </>
  );
}

export default Footer;
