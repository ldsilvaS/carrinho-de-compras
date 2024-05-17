import { LoadingContainer } from "./style";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// Faz só a animação de uma roda de loading

function Loading() {
    return (
        <LoadingContainer>
            <AiOutlineLoading3Quarters/>
        </LoadingContainer>
      );
}

export default Loading;