import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center px-2 text-white">
      <h1 className="mb-20 text-5xl font-bold">ChatGPT</h1>

      <div className="flex space-x-2 text-center">
        <div className="">
          <div className="mb-5 flex flex-col items-center justify-center">
            {/* Sun Icon */}
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>

          <div className="cursor-pointer space-y-2">
            <p className="infoText">"Explain something to me..."</p>
            <p className="infoText">
              "What is the difference between a dog and cat?"
            </p>
            <p className="infoText">"What is the color of the sun?"</p>
          </div>
        </div>

        <div className="">
          <div className="mb-5 flex flex-col items-center justify-center">
            {/* Sun Icon */}
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>

          <div className="cursor-pointer space-y-2">
            <p className="infoText">"Change the ChatGPT Model!"</p>
            <p className="infoText">
              "Messages are stored in Firebase Firestore!"
            </p>
            <p className="infoText">
              "Toast notifications while ChatGPT is thinking!"
            </p>
          </div>
        </div>

        <div className="">
          <div className="mb-5 flex flex-col items-center justify-center">
            {/* Sun Icon */}
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>

          <div className="cursor-pointer space-y-2">
            <p className="infoText">"May generate incorrect answers"</p>
            <p className="infoText">
              "May produce inaccurate instructions or biased content"
            </p>
            <p className="infoText">
              "Limited knowledge of world and events after 2021"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
