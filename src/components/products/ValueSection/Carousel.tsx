import { FC, Fragment, ReactNode, useCallback, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { twMerge } from 'tailwind-merge';

const PreviousButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div className="absolute left-0 h-full">
      <div
        style={{
          background: 'linear-gradient(to right,rgba(255,255,255,100), rgba(0,0,0,0))',
        }}
        className="absolute left-0 z-10 h-full w-14 opacity-0 transition-opacity group-hover:opacity-100"
      />

      <button
        onClick={handleClick}
        className="absolute -left-3 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-gray-700 p-0.5 opacity-30 outline-none transition-opacity group-hover:opacity-100"
      >
        <ChevronLeft className="h-5 w-5 text-white" />
      </button>
    </div>
  );
};

const NextButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div className="absolute right-0 h-full">
      <div
        style={{
          background: 'linear-gradient(to left,rgba(255,255,255,100), rgba(0,0,0,0))',
        }}
        className="absolute right-0 h-full w-14 opacity-0 transition-opacity group-hover:opacity-100"
      />

      <button
        onClick={handleClick}
        className="absolute -right-3 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-gray-700 p-0.5 opacity-30 transition-opacity group-hover:opacity-100"
      >
        <ChevronRight className="h-5 w-5 text-white" />
      </button>
    </div>
  );
};

interface DotsProps {
  items: any[];
  current: number;
  handleClick: (index: number) => void;
}

const Dots: FC<DotsProps> = ({ current, items, handleClick }) => {
  return (
    <div className="flex items-center space-x-3">
      {items.map((_, index) => {
        return (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={twMerge(
              'h-3 w-3 cursor-pointer rounded-full bg-gray-200 transition-colors hover:bg-blue-300 hover:ring-1 hover:ring-gray-200',
              index === current && '!bg-blue-500 !ring-2 ring-blue-100'
            )}
          />
        );
      })}
    </div>
  );
};

interface Props {
  items: ReactNode[];
}

function Carousel({ items }: Props) {
  const track = useRef<HTMLDivElement>(null);

  const [counter, setCounter] = useState(0);

  const translate = useCallback((posX: number, transition: boolean) => {
    if (!track.current) return;

    const margin = 16;
    const clientWidth = track.current.children[0].clientWidth;

    track.current.style.transition = transition ? 'transform 0.4s ease-in-out' : '';

    track.current.style.transform = `translateX(${-((clientWidth + margin) * posX) - (clientWidth + margin)}px)`;
  }, []);

  const changeCounter = useCallback(
    (index: number, option?: { transition: boolean }) => {
      translate(index, option?.transition ?? false);
      setCounter(index);
    },
    [translate]
  );

  const onClickNextButton = useCallback(() => {
    if (counter >= items.length) return;
    changeCounter(counter + 1, { transition: true });
  }, [changeCounter, counter, items.length]);

  const onClickPrevButton = useCallback(() => {
    if (counter <= -1) return;
    changeCounter(counter - 1, { transition: true });
  }, [changeCounter, counter]);

  const handleTransitionEnd = useCallback(() => {
    if (counter === items.length) {
      changeCounter(0, { transition: false });
      return;
    }

    if (counter === -1) {
      changeCounter(items.length - 1, { transition: false });
      return;
    }
  }, [changeCounter, counter, items.length]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="group relative flex w-full">
        <PreviousButton handleClick={onClickPrevButton} />

        <div className="overflow-x-hidden">
          <div
            ref={track}
            onTransitionEnd={handleTransitionEnd}
            className="flex w-full -translate-x-[calc(100%+16px)] items-stretch py-1 tablet:-translate-x-[calc(50%+16px)]"
          >
            {items[items.length - 1]}
            <Divider />

            {items.map((item, index) => (
              <Fragment key={index}>
                {item}
                <Divider />
              </Fragment>
            ))}

            {items[0]}
            <Divider />
            {items[1]}
          </div>
        </div>

        <NextButton handleClick={onClickNextButton} />
      </div>

      <Dots current={counter} handleClick={(index) => changeCounter(index, { transition: true })} items={items} />
    </div>
  );
}

const Divider: FC = () => <div className="w-4 flex-shrink-0"></div>;

export default Carousel;
