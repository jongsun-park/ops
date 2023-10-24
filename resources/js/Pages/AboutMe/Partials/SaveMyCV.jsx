import { PrimaryButton } from "@/Components/Inputs";
import cv from "./assets/Jongsun_Park_CV_2023.pdf";

const SaveMyCV = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-3xl">
            Save my CV for reference.
          </h2>

          <p className="mx-auto mt-4 max-w-sm text-gray-500">
            Learn more about my professional journey by downloading my CV.
          </p>

          <PrimaryButton className="my-10">
            <a href={cv} download target="_blank">
              Jongsun_Park_CV_2023.pdf
            </a>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default SaveMyCV;
