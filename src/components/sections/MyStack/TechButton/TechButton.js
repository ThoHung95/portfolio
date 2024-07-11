import {
  Button,
  Heading,
  Icon,
  IconButton,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { FiExternalLink } from "react-icons/fi";
import {
  SiBootstrap,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
} from "react-icons/si";
import smartBrainIcon from "../../../../assets/media/smart_brain_favicon.png";
import bgGeneratorIcon from "../../../../assets/media/bg_generator_favicon.png";
import roboIcon from "../../../../assets/media/robo_favicon.png";

const openUrlInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

function TechButton({
  label,
  colorScheme = "whiteAlpha",
  footerColorScheme = "blackAlpha",
  color = "black",
  bgHover = "whiteAlpha.600",
  bgActive = "whiteAlpha.700",
  footerBgHover = bgHover,
  footerBgActive = bgActive,
  icon,
  size = { base: "lg" },
  description = " ",
  t,
  infoUrl = "https://www.google.com/",
}) {
  return (
    <>
      <Tooltip
        label={label}
        closeOnClick={true}
        hasArrow="true"
        placement="top"
        bg="gray.200"
        color="#1A202C"
      >
        <div>
          <Popover
            computePositionOnMount={true}
            flip={true}
            preventOverflow={true}
            strategy={"fixed"}
            trigger={"click"}
            isLazy={true}
            autoFocus={true}
          >
            <PopoverTrigger>
              {/* ICON BUTTON */}
              <IconButton
                color={color}
                size={size}
                aria-label={label}
                icon={icon}
                colorScheme={colorScheme}
                _hover={{ bg: bgHover }}
                _active={{ bg: bgActive }}
                m={1}
              />
            </PopoverTrigger>
            <PopoverContent color="#1A202C" bg={"white"}>
              <PopoverArrow />
              <PopoverCloseButton />

              {/* POPOVER HEADER */}
              <PopoverHeader>
                <Heading
                  as={"h4"}
                  fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
                >
                  {label}
                </Heading>
              </PopoverHeader>

              {/* POPOVER BODY */}
              <PopoverBody>{description}</PopoverBody>

              {/* POPOVER FOOTER */}
              <PopoverFooter display="flex" justifyContent="flex-end">
                <Button
                  color={color}
                  size={size}
                  aria-label={label}
                  leftIcon={icon}
                  colorScheme={footerColorScheme}
                  _hover={{ bg: footerBgHover }}
                  _active={{ bg: footerBgActive }}
                  m={1}
                  onClick={() => openUrlInNewTab(infoUrl)}
                >
                  {t("info")}
                </Button>
              </PopoverFooter>
            </PopoverContent>
          </Popover>
        </div>
      </Tooltip>
    </>
  );
}

export const ExpressButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>
      {/* DESCRIPTION */}
      {t("expressjs_description").split("Node.js")[0]}
      <Button
        leftIcon={<SiNodedotjs />}
        bg="rgba(104, 160, 99, 0.36)"
        _hover={{ bg: "rgba(104, 160, 99, 0.48)" }}
        _active={{ bg: "rgba(104, 160, 99, 0.64)" }}
        m={1}
        onClick={() => openUrlInNewTab("https://nodejs.org/")}
      >
        Node.js
      </Button>
      {t("expressjs_description").split("Node.js")[1]}
      <br />

      {/* WEB CITE */}
      <cite>
        <Link href="https://en.wikipedia.org/wiki/Express.js" isExternal>
          Wikipedia <Icon as={FiExternalLink} mx="2px" />
        </Link>
      </cite>
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label="Express.js"
      icon={<SiExpress />}
      bgHover="rgba(64, 77, 89, 0.48)"
      bgActive="rgba(64, 77, 89, 0.64)"
      infoUrl="https://expressjs.com/"
    />
  );
};

export const ReactButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>
      {/* DESCRIPTION */}
      {t("react_description").split("JavaScript")[0]}
      <Button
        leftIcon={<SiJavascript />}
        bg="rgba(240, 219, 79, 0.36)"
        _hover={{ bg: "rgba(240, 219, 79, 0.48)" }}
        _active={{ bg: "rgba(240, 219, 79, 0.64)" }}
        m={1}
        onClick={() =>
          openUrlInNewTab("https://developer.mozilla.org/docs/Web/JavaScript")
        }
      >
        JavaScript
      </Button>
      {t("react_description").split("JavaScript")[1]}
      <br />

      {/* WEB CITE */}
      <cite>
        <Link
          href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
          isExternal
        >
          Wikipedia <Icon as={FiExternalLink} mx="2px" />
        </Link>
      </cite>
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label="React"
      icon={<SiReact />}
      bgHover="rgba(97, 219, 251, 0.48)"
      bgActive="rgba(97, 219, 251, 0.64)"
      infoUrl="https://reactjs.org/"
    />
  );
};

export const BootstrapButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>
      {/* DESCRIPTION */}
      {t("bootstrap_description")}
      <br />

      {/* WEB CITE */}
      <cite>
        <Link
          href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"
          isExternal
        >
          Wikipedia <Icon as={FiExternalLink} mx="2px" />
        </Link>
      </cite>
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label="Bootstrap"
      icon={<SiBootstrap />}
      bgHover="rgba(86, 61, 124, 0.48)"
      bgActive="rgba(86, 61, 124, 0.64)"
      infoUrl="https://getbootstrap.com/"
    />
  );
};

export const PostgreSqlButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>
      {/* DESCRIPTION */}
      {t("postgresql_description")}
      <br />

      {/* WEB CITE */}
      <cite>
        <Link href="https://en.wikipedia.org/wiki/PostgreSQL" isExternal>
          Wikipedia <Icon as={FiExternalLink} mx="2px" />
        </Link>
      </cite>
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label="PostgreSQL"
      icon={<SiPostgresql />}
      bgHover="rgba(51, 103, 145, 0.48)"
      bgActive="rgba(51, 103, 145, 0.64)"
      infoUrl="https://www.postgresql.org/"
    />
  );
};

export const MongoDbButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>
      {/* DESCRIPTION */}
      {t("mongodb_description")}
      <br />

      {/* WEB CITE */}
      <cite>
        <Link href="https://en.wikipedia.org/wiki/MongoDB" isExternal>
          Wikipedia <Icon as={FiExternalLink} mx="2px" />
        </Link>
      </cite>
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label="MongoDB"
      icon={<SiMongodb />}
      bgHover="rgba(77, 179, 61, 0.48)"
      bgActive="rgba(77, 179, 61, 0.64)"
      infoUrl="https://www.mongodb.com/"
    />
  );
};

export const SmartBrainButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>
      {/* DESCRIPTION */}
      {t("smart_brain_description").split("React")[0]}
      <Button
        leftIcon={<SiReact />}
        bg="rgba(240, 219, 79, 0.36)"
        _hover={{ bg: "rgba(240, 219, 79, 0.48)" }}
        _active={{ bg: "rgba(240, 219, 79, 0.64)" }}
        m={1}
        onClick={() => openUrlInNewTab("https://create-react-app.dev/")}
      >
        React
      </Button>
      {t("smart_brain_description").split("React")[1]}
      <br />
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label="Smart Brain"
      icon={
        <img src={smartBrainIcon} alt="Smart Brain" style={{ height: "70%" }} />
      }
      bgHover="rgba(97, 219, 251, 0.48)"
      bgActive="rgba(97, 219, 251, 0.64)"
      infoUrl="https://smart-brain-sprz.onrender.com/"
    />
  );
};

export const BgGeneratorButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>
      {/* DESCRIPTION */}
      {t("bg_generator_description").split("JavaScript")[0]}
      <Button
        leftIcon={<SiJavascript />}
        bg="rgba(240, 219, 79, 0.36)"
        _hover={{ bg: "rgba(240, 219, 79, 0.48)" }}
        _active={{ bg: "rgba(240, 219, 79, 0.64)" }}
        m={1}
        onClick={() =>
          openUrlInNewTab("https://developer.mozilla.org/docs/Web/JavaScript")
        }
      >
        JavaScript
      </Button>
      {t("bg_generator_description").split("JavaScript")[1]}
      <br />
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label="Background Generator"
      icon={
        <img
          src={bgGeneratorIcon}
          alt="Smart Brain"
          style={{ height: "70%" }}
        />
      }
      bgHover="rgba(97, 219, 251, 0.48)"
      bgActive="rgba(97, 219, 251, 0.64)"
      infoUrl="https://thohung95.github.io/background-generator/"
    />
  );
};

export const RobofriendsButton = () => {
  const { t } = useTranslation();

  const description = (
    <Text>
      {/* DESCRIPTION */}
      {t("robofriends_description").split("React")[0]}
      <Button
        leftIcon={<SiReact />}
        bg="rgba(240, 219, 79, 0.36)"
        _hover={{ bg: "rgba(240, 219, 79, 0.48)" }}
        _active={{ bg: "rgba(240, 219, 79, 0.64)" }}
        m={1}
        onClick={() => openUrlInNewTab("https://create-react-app.dev/")}
      >
        React
      </Button>
      {t("robofriends_description").split("React")[1]}
      <br />
    </Text>
  );

  return (
    <TechButton
      t={t}
      description={description}
      label="Smart Brain"
      icon={<img src={roboIcon} alt="Smart Brain" style={{ height: "70%" }} />}
      bgHover="rgba(97, 219, 251, 0.48)"
      bgActive="rgba(97, 219, 251, 0.64)"
      infoUrl="https://thohung95.github.io/robofriends/"
    />
  );
};
