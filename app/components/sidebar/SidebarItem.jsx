import { Flex, Text, Icon, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import Link from "next/link";
import SidebarItemHoverEffect from "./SidebarItemHoverEffect";
import { usePaginaActivaContext } from "../../components/contextos/PaginaActivaProvider"

const SidebarItem = ({
  icon,
  title,
  description,
  active,
  navSize,
  page,
  onClose,
}) => {

    const {botonActivado} = usePaginaActivaContext();

    const handleClick = () => {
        onClose();
    }

  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      alignItems= "flex-start"
    >
      <Menu placement="right">
        <Link href={page}>
          <a onClick={handleClick}>
            <MenuButton
              w="200px"
              backgroundColor={botonActivado === title && "#AEC8CA"}
              p={3}
              borderRadius={8}
              _hover={{ textDecor: "none", backgroundColor: "#AEC8CA" }}
            
            >
              <Flex>
                <Icon
                  as={icon}
                  fontSize="xl"
                  color={active ? "#82AAAD" : "gray.500"}
                />
                <Text ml={5} display={navSize == "small" ? "none" : "flex"}>
                  {title}
                </Text>
              </Flex>
            </MenuButton>{" "}
          </a>
        </Link>
        <MenuList py={0} border="none" w={200} h={200} ml={5}>
          <SidebarItemHoverEffect
            title={title}
            icon={icon}
            description={description}
          />
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default SidebarItem;
