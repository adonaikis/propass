"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

type SiteAnimationsProps = {
  children: ReactNode;
};

export default function SiteAnimations({ children }: SiteAnimationsProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      const root = scope.current;

      if (!root || !contextSafe) return;

      const media = gsap.matchMedia();
      const cleanups: Array<() => void> = [];

      const animateReveal = (
        targets: HTMLElement[],
        trigger: HTMLElement,
        options: { distance?: number; stagger?: number } = {},
      ) => {
        if (!targets.length) return;

        gsap.fromTo(
          targets,
          { autoAlpha: 0, y: options.distance ?? 36 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.95,
            stagger: options.stagger ?? 0.1,
            ease: "power3.out",
            overwrite: "auto",
            scrollTrigger: {
              trigger,
              start: "top 88%",
              once: true,
            },
          },
        );
      };

      const setupCommonAnimations = (distance: number) => {
        const hero = root.querySelector<HTMLElement>("[data-hero]");
        const heroMedia = root.querySelector<HTMLElement>("[data-hero-media]");
        const heroCopy = root.querySelector<HTMLElement>("[data-hero-copy]");
        const heroSearch =
          root.querySelector<HTMLElement>("[data-hero-search]");
        const header = root.querySelector<HTMLElement>("[data-site-header]");
        const footer = root.querySelector<HTMLElement>("[data-footer]");
        const footerOrbit = root.querySelector<HTMLElement>(
          "[data-footer-orbit]",
        );

        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

        if (header) {
          intro.from(header, { autoAlpha: 0, y: -18, duration: 0.65 });
        }

        if (heroMedia) {
          intro.from(heroMedia, { scale: 1.08, duration: 1.5 }, 0);
        }

        if (heroCopy) {
          intro.from(
            Array.from(heroCopy.children),
            { autoAlpha: 0, y: 28, duration: 0.9, stagger: 0.12 },
            0.2,
          );
        }

        if (heroSearch) {
          intro.from(heroSearch, { autoAlpha: 0, y: 30, duration: 0.85 }, 0.52);
          intro.from(
            heroSearch.querySelectorAll("[data-hero-field]"),
            { autoAlpha: 0, y: 12, duration: 0.55, stagger: 0.07 },
            0.68,
          );
        }

        if (hero && heroMedia) {
          gsap.to(heroMedia, {
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 0.8,
            },
          });
        }

        if (footer && footerOrbit) {
          gsap.fromTo(
            footerOrbit,
            { autoAlpha: 0, scale: 0.84 },
            {
              autoAlpha: 1,
              scale: 1,
              duration: 1.3,
              ease: "power3.out",
              scrollTrigger: {
                trigger: footer,
                start: "top 82%",
                once: true,
              },
            },
          );
        }

        root
          .querySelectorAll<HTMLElement>('[data-animate="reveal"]')
          .forEach((element) => {
            animateReveal([element], element, { distance });
          });

        root
          .querySelectorAll<HTMLElement>(
            '[data-animate="stagger"]:not([data-gallery])',
          )
          .forEach((group) => {
            const items = Array.from(
              group.querySelectorAll<HTMLElement>(
                ":scope > [data-animate-item]",
              ),
            );
            animateReveal(items, group, { distance, stagger: 0.11 });
          });

        root.querySelectorAll<HTMLElement>("[data-line]").forEach((line) => {
          gsap.fromTo(
            line,
            { scaleX: 0, transformOrigin: "left center" },
            {
              scaleX: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: line,
                start: "top 90%",
                once: true,
              },
            },
          );
        });

        root
          .querySelectorAll<HTMLElement>("[data-float]")
          .forEach((element, index) => {
            const amount = Number(element.dataset.float ?? 7);

            gsap.to(element, {
              y: index % 2 === 0 ? -amount : amount,
              rotation: index % 2 === 0 ? -1.2 : 1.2,
              duration: 3.1 + (index % 3) * 0.45,
              delay: index * 0.12,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
            });
          });
      };

      const setupGallery = (
        variant: "desktop" | "mobile",
        distance: number,
      ) => {
        root
          .querySelectorAll<HTMLElement>(`[data-gallery="${variant}"]`)
          .forEach((gallery) => {
            const items = Array.from(
              gallery.querySelectorAll<HTMLElement>(
                ":scope > [data-gallery-item]",
              ),
            );
            animateReveal(items, gallery, { distance, stagger: 0.08 });
          });
      };

      media.add("(prefers-reduced-motion: no-preference)", () => {
        setupCommonAnimations(36);
      });

      media.add(
        "(min-width: 860px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
        () => {
          setupGallery("desktop", 40);

          root
            .querySelectorAll<HTMLElement>("[data-parallax]")
            .forEach((element) => {
              const amount = Number(element.dataset.parallax ?? 5);
              const trigger =
                element.closest<HTMLElement>("section, article") ?? element;

              gsap.fromTo(
                element,
                { yPercent: -amount },
                {
                  yPercent: amount,
                  ease: "none",
                  scrollTrigger: {
                    trigger,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.9,
                  },
                },
              );
            });

          root
            .querySelectorAll<HTMLElement>("[data-magnetic]")
            .forEach((element) => {
              if (element.offsetParent === null) return;

              const strength = Number(element.dataset.magnetic ?? 7);
              const moveX = gsap.quickTo(element, "x", {
                duration: 0.35,
                ease: "power3.out",
              });
              const moveY = gsap.quickTo(element, "y", {
                duration: 0.35,
                ease: "power3.out",
              });

              const onMove = contextSafe((event: PointerEvent) => {
                const bounds = element.getBoundingClientRect();
                moveX(
                  ((event.clientX - bounds.left) / bounds.width - 0.5) *
                    strength,
                );
                moveY(
                  ((event.clientY - bounds.top) / bounds.height - 0.5) *
                    strength,
                );
              });
              const onLeave = contextSafe(() => {
                moveX(0);
                moveY(0);
              });

              element.addEventListener("pointermove", onMove);
              element.addEventListener("pointerleave", onLeave);
              cleanups.push(() => {
                element.removeEventListener("pointermove", onMove);
                element.removeEventListener("pointerleave", onLeave);
                gsap.killTweensOf(element);
              });
            });

          root
            .querySelectorAll<HTMLElement>("[data-tilt]")
            .forEach((element) => {
              if (element.offsetParent === null) return;

              const strength = Number(element.dataset.tilt ?? 3);
              const rotateX = gsap.quickTo(element, "rotationX", {
                duration: 0.45,
                ease: "power3.out",
              });
              const rotateY = gsap.quickTo(element, "rotationY", {
                duration: 0.45,
                ease: "power3.out",
              });

              gsap.set(element, {
                transformPerspective: 900,
                transformOrigin: "center",
              });

              const onMove = contextSafe((event: PointerEvent) => {
                const bounds = element.getBoundingClientRect();
                const x = (event.clientX - bounds.left) / bounds.width - 0.5;
                const y = (event.clientY - bounds.top) / bounds.height - 0.5;
                rotateX(-y * strength);
                rotateY(x * strength);
              });
              const onLeave = contextSafe(() => {
                rotateX(0);
                rotateY(0);
              });

              element.addEventListener("pointermove", onMove);
              element.addEventListener("pointerleave", onLeave);
              cleanups.push(() => {
                element.removeEventListener("pointermove", onMove);
                element.removeEventListener("pointerleave", onLeave);
                gsap.killTweensOf(element);
              });
            });
        },
      );

      media.add(
        "(max-width: 859px) and (prefers-reduced-motion: no-preference)",
        () => setupGallery("mobile", 22),
      );

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          root.querySelectorAll(
            "[data-animate], [data-animate-item], [data-gallery-item], [data-hero-copy], [data-hero-search]",
          ),
          { clearProps: "all" },
        );
      });

      root
        .querySelectorAll<HTMLAnchorElement>('a[href^="#"]:not([href="#"])')
        .forEach((link) => {
          const onClick = contextSafe((event: MouseEvent) => {
            if (
              event.defaultPrevented ||
              event.button !== 0 ||
              event.metaKey ||
              event.ctrlKey ||
              event.shiftKey ||
              event.altKey ||
              window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ) {
              return;
            }

            const selector = link.getAttribute("href");
            const target = selector
              ? document.querySelector<HTMLElement>(selector)
              : null;

            if (!target) return;

            event.preventDefault();
            gsap.to(window, {
              duration: 1.05,
              ease: "power3.inOut",
              scrollTo: { y: target, offsetY: 12, autoKill: true },
              onComplete: () => window.history.replaceState(null, "", selector),
            });
          });

          link.addEventListener("click", onClick);
          cleanups.push(() => link.removeEventListener("click", onClick));
        });

      root.querySelectorAll<HTMLElement>("[data-pulse]").forEach((element) => {
        const onClick = contextSafe(() => {
          gsap.fromTo(
            element,
            { scale: 0.88 },
            { scale: 1, duration: 0.5, ease: "back.out(2.4)", overwrite: true },
          );
        });

        element.addEventListener("click", onClick);
        cleanups.push(() => element.removeEventListener("click", onClick));
      });

      let active = true;
      const refresh = () => {
        if (active) ScrollTrigger.refresh();
      };

      window.addEventListener("load", refresh, { once: true });
      void document.fonts?.ready.then(refresh);

      return () => {
        active = false;
        window.removeEventListener("load", refresh);
        cleanups.forEach((cleanup) => cleanup());
        media.revert();
      };
    },
    { scope },
  );

  return <div ref={scope}>{children}</div>;
}
