import {
  useState,
  useEffect,
  useCallback,
  forwardRef,
  createContext,
  useContext,
} from "react";

import useEmblaCarousel from "embla-carousel-react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import { cn } from "../../lib/utils";
import { Button } from "../../components";

const CarouselContext = createContext(null);

function useCarousel() {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

type CarouselProps = {
  orientation?: "horizontal" | "vertical";
  opts: any;
  setApi: any;
  plugins: any;
  className: string;
  children: React.ReactNode;
};

const Carousel = forwardRef(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    }: CarouselProps,
    ref,
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const onSelect = useCallback(
      (api: {
        canScrollPrev: () => boolean | ((prevState: boolean) => boolean);
        canScrollNext: () => boolean | ((prevState: boolean) => boolean);
      }) => {
        if (!api) {
          return;
        }

        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
      },
      [],
    );

    const scrollPrev = useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = useCallback(
      (event: KeyboardEvent) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          onKeyDownCapture={
            handleKeyDown as unknown as React.KeyboardEventHandler<HTMLDivElement>
          }
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

const CarouselContent = forwardRef(
  ({ className, ...props }: { className: string }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={cn(
            "flex",
            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = forwardRef(
  ({ className, ...props }: { className: string }, ref) => {
    const { orientation } = useCarousel();

    return (
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        role="group"
        aria-roledescription="slide"
        className={cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className,
        )}
        {...props}
      />
    );
  },
);
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = forwardRef(
  (
    {
      className,
      variant = "outline",
      size = "icon",
      ...props
    }: { className: string; variant: string; size: string },
    ref,
  ) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute  h-6 w-6 md:h-8 md:w-8 rounded-full",
          orientation === "horizontal"
            ? "left-2 md:left-4 lg:left-12 top-1/2 -translate-y-1/2"
            : "top-8 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <HiArrowLeft className="h-3 w-3 md:h-4 md:w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  },
);
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = forwardRef(
  (
    {
      className,
      variant = "outline",
      size = "icon",
      ...props
    }: { className: string; variant: string; size: string },
    ref,
  ) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-6 w-6 md:h-8 md:w-8 rounded-full",
          orientation === "horizontal"
            ? "right-2 md:right-4 lg:right-12 top-1/2 -translate-y-1/2"
            : "bottom-8 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <HiArrowRight className="h-3 w-3 md:h-4 md:w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  },
);
CarouselNext.displayName = "CarouselNext";

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
