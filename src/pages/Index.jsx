import { Button, VStack } from "@chakra-ui/react";
import { FaBriefcase, FaSmile, FaHome, FaSmoking, FaToilet } from "react-icons/fa";

const Index = () => {
  return (
    <VStack spacing={4}>
      <Button leftIcon={<FaBriefcase />} colorScheme="red" _hover={{ bg: "red.300" }} _active={{ bg: "red.500" }}>
        ボス
      </Button>
      <Button leftIcon={<FaSmile />} colorScheme="green" _hover={{ bg: "green.300" }} _active={{ bg: "green.500" }}>
        励まし
      </Button>
      <Button leftIcon={<FaHome />} colorScheme="blue" _hover={{ bg: "blue.300" }} _active={{ bg: "blue.500" }}>
        帰宅
      </Button>
      <Button leftIcon={<FaSmoking />} colorScheme="gray" _hover={{ bg: "gray.300" }} _active={{ bg: "gray.500" }}>
        タバコ
      </Button>
      <Button leftIcon={<FaToilet />} colorScheme="purple" _hover={{ bg: "purple.300" }} _active={{ bg: "purple.500" }}>
        トイレ
      </Button>
    </VStack>
  );
};

export default Index;
