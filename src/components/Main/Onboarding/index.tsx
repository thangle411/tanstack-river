import Carousel from "./Carousel";
import OnBoardingSteps from "./OnBoardingSteps";

export default function Onboarding() {


    return (
        <div className="space-y-4 xl:max-w-[368px]">
            <Carousel />
            <OnBoardingSteps />
        </div>
    )
}