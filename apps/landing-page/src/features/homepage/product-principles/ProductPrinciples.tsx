import { buttonVariants } from "@typebot.io/ui/components/Button";
import { ArrowDown01Icon } from "@typebot.io/ui/icons/ArrowDown01Icon";
import { ArrowUp01Icon } from "@typebot.io/ui/icons/ArrowUp01Icon";
import { cn } from "@typebot.io/ui/lib/cn";
import { motion } from "motion/react";
import { useId, useState } from "react";
import threeDButton from "./assets/3d-button.png";

const data = [
  {
    title: "Effortless building experience",
    content:
      "Leads makes it easy to build conversational interfaces with lots of customization options. The flexible, scalable solution uses adaptable building blocks that fit any business need. Each block comes with great default settings but every little detail can be configured to match your requirements.",
  },
  {
    title: "Extensive chat capabilities",
    content:
      "Leads goes beyond customer support, offering versatile chat flows perfect for quizzes, surveys, creative marketing, and more. It's ideal for lead generation, internal communications, and diverse departmental needs, making it a valuable tool across your organization.",
  },
  {
    title: "Designed for human delight",
    content:
      "Experience first-class UX and beautiful interfaces with Leads. The easy-to-use visual flow editor helps you create engaging and lively conversations, making interactions with the tool smooth and enjoyable.",
  },
  {
    title: "Made with love for developers ",
    content:
      "Leads is built for personal self-hosting and customization, with a flexible foundation for developers and operators.",
  },
  {
    title: "Continuously evolving technology",
    content:
      "Leads technology is designed to keep evolving with regular updates, new features, and performance improvements.",
  },
];

export const ProductPrinciples = () => {
  const [openedIndex, setOpenedIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    if (openedIndex === index) return;
    setOpenedIndex(index);
  };

  return (
    <div className="flex flex-col gap-8 max-w-7xl w-full">
      <h2>We strive to create great things</h2>
      <div className="flex md:bg-white rounded-2xl gap-4 p-2 items-start border">
        <div className="flex flex-col gap-2 md:gap-0 md:pl-4 w-full">
          {data.map(({ title, content }, index) => (
            <Principle
              key={title}
              title={title}
              content={content}
              isOpened={index === openedIndex}
              isLastItem={index === data.length - 1}
              onClick={() => toggleIndex(index)}
            />
          ))}
        </div>
        <img
          src={threeDButton}
          alt="An illustration of a button in 3 dimension with the Leads logo on it"
          className="max-w-lg md:block hidden"
        />
      </div>
    </div>
  );
};

const Principle = ({
  title,
  content,
  isOpened,
  isLastItem,
  onClick,
}: {
  title: string;
  content: string;
  isOpened: boolean;
  isLastItem: boolean;
  onClick: () => void;
}) => {
  const contentId = useId();

  return (
    <div className="rounded-xl md:rounded-none md:px-0 bg-white border md:border-0 border-border">
      <button
        type="button"
        className="w-full px-4 py-4 font-display font-medium text-2xl flex flex-col items-stretch gap-3 text-left cursor-pointer"
        aria-expanded={isOpened}
        aria-controls={contentId}
        onClick={onClick}
      >
        <span className="flex justify-between">
          {title}
          <span
            className={cn(
              buttonVariants({ variant: "secondary", size: "icon" }),
              "shrink-0 [&_svg]:size-6",
            )}
          >
            {isOpened ? (
              <ArrowUp01Icon className="size-8" />
            ) : (
              <ArrowDown01Icon />
            )}
          </span>
        </span>
      </button>
      {isLastItem ? null : <hr className="hidden md:block mx-4" />}
      <motion.div
        id={contentId}
        className="overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpened ? "auto" : 0,
          opacity: isOpened ? 1 : 0,
        }}
        transition={{ duration: 0.4, type: "spring", bounce: 0.15 }}
      >
        <hr className="mb-4 md:hidden mx-4 border-border" />
        <p className="py-4 mx-4">{content}</p>
      </motion.div>
    </div>
  );
};
