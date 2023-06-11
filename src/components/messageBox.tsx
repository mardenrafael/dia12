import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface MessageBoxProps {
  text: string;
  isLeft: boolean;
}

export default function messageBox({
  text,
  isLeft,
}: MessageBoxProps): JSX.Element {
  return (
    <div className={`${isLeft == true ? "flex justify-end" : ""}`}>
      <div className="rounded-lg py-2 px-4 w-fit bg-green-500">
        {text}
        <div className="flex items-center justify-end mt-2">
          <FontAwesomeIcon icon={faCheck} beat className="w-4 h-4 text-blue" />
        </div>
      </div>
    </div>
  );
}
