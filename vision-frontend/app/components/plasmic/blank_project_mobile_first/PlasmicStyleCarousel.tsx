// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iTJnNP8tTWeqztkYCLWG3v
// Component: 0cmKFzdKwJR

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  usePlasmicDataConfig,
  executePlasmicDataOp,
  usePlasmicDataOp,
} from "@plasmicapp/react-web/lib/data-sources";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";
import StyleTile from "../../StyleTile"; // plasmic-import: BHBxKjySiY/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources"; // plasmic-import: R80r8yGEZBfwnm/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project_mobile_first.module.css"; // plasmic-import: iTJnNP8tTWeqztkYCLWG3v/projectcss
import sty from "./PlasmicStyleCarousel.module.css"; // plasmic-import: 0cmKFzdKwJR/css

import wonder1687626807880JpgTpe1HfGpl from "./images/wonder1687626807880Jpg.jpg"; // plasmic-import: Tpe1HfGPL/picture
import wonder1687626954198JpgOKIyPlBt from "./images/wonder1687626954198Jpg.jpg"; // plasmic-import: o-kIyPLBt/picture
import wonder1687627009719JpgD4JCYh4U from "./images/wonder1687627009719Jpg.jpg"; // plasmic-import: D4jC_Yh4U/picture
import wonder1687627058566JpgAMTkDxl8T from "./images/wonder1687627058566Jpg.jpg"; // plasmic-import: aMTkDxl8T/picture
import wonder1687627141293Jpg2PiMtfLuV from "./images/wonder1687627141293Jpg.jpg"; // plasmic-import: 2PiMTFLuV/picture
import wonder1687627230129JpgKAcEPosv4 from "./images/wonder1687627230129Jpg.jpg"; // plasmic-import: KAcEPosv4/picture

createPlasmicElementProxy;

export type PlasmicStyleCarousel__VariantMembers = {};
export type PlasmicStyleCarousel__VariantsArgs = {};
type VariantPropType = keyof PlasmicStyleCarousel__VariantsArgs;
export const PlasmicStyleCarousel__VariantProps = new Array<VariantPropType>();

export type PlasmicStyleCarousel__ArgsType = {
  children?: React.ReactNode;
  selected?: number;
};
type ArgPropType = keyof PlasmicStyleCarousel__ArgsType;
export const PlasmicStyleCarousel__ArgProps = new Array<ArgPropType>(
  "children",
  "selected"
);

export type PlasmicStyleCarousel__OverridesType = {
  root?: p.Flex<"section">;
};

export interface DefaultStyleCarouselProps {
  children?: React.ReactNode;
  selected?: number;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicStyleCarousel__RenderFunc(props: {
  variants: PlasmicStyleCarousel__VariantsArgs;
  args: PlasmicStyleCarousel__ArgsType;
  overrides: PlasmicStyleCarousel__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants,
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <section className={classNames(projectcss.all, sty.section__uDxm2)}>
        <section className={classNames(projectcss.all, sty.section___3UhLl)}>
          <section className={classNames(projectcss.all, sty.section__eSmld)}>
            <p.Stack
              as={"section"}
              hasGap={true}
              className={classNames(projectcss.all, sty.section__c0PgR)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__gIrfr
                )}
              >
                {"Select"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__az9DB
                )}
              >
                {"Style"}
              </div>
            </p.Stack>
            <section className={classNames(projectcss.all, sty.section__j9Xh1)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__vFqhN
                )}
              >
                {"Optional"}
              </div>
            </section>
          </section>
        </section>
      </section>
      <p.Stack
        as={"section"}
        hasGap={true}
        className={classNames(projectcss.all, sty.section__p86P9)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <StyleTile
                className={classNames("__wab_instance", sty.styleTile__oSf1I)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__fduRi)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"100%" as const}
                  displayMinWidth={"100%" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: wonder1687626807880JpgTpe1HfGpl,
                    fullWidth: 2048,
                    fullHeight: 2048,
                    aspectRatio: undefined,
                  }}
                />
              </StyleTile>
              <StyleTile
                className={classNames("__wab_instance", sty.styleTile__bHpOl)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__eFaff)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"100%" as const}
                  displayMinWidth={"100%" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: wonder1687626954198JpgOKIyPlBt,
                    fullWidth: 2048,
                    fullHeight: 2048,
                    aspectRatio: undefined,
                  }}
                />
              </StyleTile>
              <StyleTile
                className={classNames("__wab_instance", sty.styleTile___99Sjn)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__cTHbn)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"100%" as const}
                  displayMinWidth={"100%" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: wonder1687627009719JpgD4JCYh4U,
                    fullWidth: 2048,
                    fullHeight: 2048,
                    aspectRatio: undefined,
                  }}
                />
              </StyleTile>
              <StyleTile
                className={classNames("__wab_instance", sty.styleTile__zfr4P)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__agl9O)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"100%" as const}
                  displayMinWidth={"100%" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: wonder1687627058566JpgAMTkDxl8T,
                    fullWidth: 2048,
                    fullHeight: 2048,
                    aspectRatio: undefined,
                  }}
                />
              </StyleTile>
              <StyleTile
                className={classNames("__wab_instance", sty.styleTile__tcB0D)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__kLwZ)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"100%" as const}
                  displayMinWidth={"100%" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: wonder1687627141293Jpg2PiMtfLuV,
                    fullWidth: 2048,
                    fullHeight: 2048,
                    aspectRatio: undefined,
                  }}
                />
              </StyleTile>
              <StyleTile
                className={classNames("__wab_instance", sty.styleTile__leB9P)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img___7Sd5Z)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"100%" as const}
                  displayMinWidth={"100%" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: wonder1687627230129JpgKAcEPosv4,
                    fullWidth: 2048,
                    fullHeight: 2048,
                    aspectRatio: undefined,
                  }}
                />
              </StyleTile>
            </React.Fragment>
          ),
          value: args.children,
        })}
      </p.Stack>
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "section";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicStyleCarousel__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicStyleCarousel__VariantsArgs;
    args?: PlasmicStyleCarousel__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicStyleCarousel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicStyleCarousel__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicStyleCarousel__ArgProps,
          internalVariantPropNames: PlasmicStyleCarousel__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicStyleCarousel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicStyleCarousel";
  } else {
    func.displayName = `PlasmicStyleCarousel.${nodeName}`;
  }
  return func;
}

export const PlasmicStyleCarousel = Object.assign(
  // Top-level PlasmicStyleCarousel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicStyleCarousel
    internalVariantProps: PlasmicStyleCarousel__VariantProps,
    internalArgProps: PlasmicStyleCarousel__ArgProps,
  }
);

export default PlasmicStyleCarousel;
/* prettier-ignore-end */
