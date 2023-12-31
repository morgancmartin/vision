// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iTJnNP8tTWeqztkYCLWG3v
// Component: mm3MDMqsMdU7b

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
import StyleCarousel from "../../StyleCarousel"; // plasmic-import: 0cmKFzdKwJR/component
import StyleTile from "../../StyleTile"; // plasmic-import: BHBxKjySiY/component
import Button from "../../Button"; // plasmic-import: hNBe8CGvMSl/component
import DiscoverTile from "../../DiscoverTile"; // plasmic-import: 0sKOrKoeNa/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources"; // plasmic-import: R80r8yGEZBfwnm/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project_mobile_first.module.css"; // plasmic-import: iTJnNP8tTWeqztkYCLWG3v/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: mm3MDMqsMdU7b/css

import UserIcon from "./icons/PlasmicIcon__User"; // plasmic-import: t0RFwlkFx/icon
import CheckIcon from "./icons/PlasmicIcon__Check"; // plasmic-import: _BAnEXFX-aP/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 31UAxQ8ZIvu/icon
import wonder1687626807880JpgTpe1HfGpl from "./images/wonder1687626807880Jpg.jpg"; // plasmic-import: Tpe1HfGPL/picture
import wonder1687626954198JpgOKIyPlBt from "./images/wonder1687626954198Jpg.jpg"; // plasmic-import: o-kIyPLBt/picture
import wonder1687627009719JpgD4JCYh4U from "./images/wonder1687627009719Jpg.jpg"; // plasmic-import: D4jC_Yh4U/picture
import wonder1687627058566JpgAMTkDxl8T from "./images/wonder1687627058566Jpg.jpg"; // plasmic-import: aMTkDxl8T/picture
import wonder1687627141293Jpg2PiMtfLuV from "./images/wonder1687627141293Jpg.jpg"; // plasmic-import: 2PiMTFLuV/picture
import wonder1687627230129JpgKAcEPosv4 from "./images/wonder1687627230129Jpg.jpg"; // plasmic-import: KAcEPosv4/picture
import wonder1687803881391JpgGl36XgdY from "./images/wonder1687803881391Jpg.jpg"; // plasmic-import: gl36Xgd-Y/picture
import wonder1687803889615JpgPg6IigmVm from "./images/wonder1687803889615Jpg.jpg"; // plasmic-import: Pg6IigmVm/picture
import wonder1687803903721JpgDdfctTQeb from "./images/wonder1687803903721Jpg.jpg"; // plasmic-import: ddfctTQeb/picture

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {
  children?: React.ReactNode;
  onSubmit?: (event: any) => void;
  slot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>(
  "children",
  "onSubmit",
  "slot"
);

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  button?: p.Flex<typeof Button>;
  freeBox?: p.Flex<"div">;
};

export interface DefaultHomepageProps {
  children?: React.ReactNode;
  onSubmit?: (event: any) => void;
  slot?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
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
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
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
          <section className={classNames(projectcss.all, sty.section__axuVw)}>
            <UserIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              role={"img"}
            />
          </section>
          <section className={classNames(projectcss.all, sty.section___8OTov)}>
            <section className={classNames(projectcss.all, sty.section__xijge)}>
              {p.renderPlasmicSlot({
                defaultContents: null,
                value: args.children,
              })}
              <section
                className={classNames(projectcss.all, sty.section__tc5Yw)}
              >
                {p.renderPlasmicSlot({
                  defaultContents: (
                    <StyleCarousel
                      className={classNames(
                        "__wab_instance",
                        sty.styleCarousel__yTsNc
                      )}
                    />
                  ),

                  value: args.slot,
                })}
                <section
                  className={classNames(projectcss.all, sty.section__aqkW)}
                >
                  <Button
                    data-plasmic-name={"button"}
                    data-plasmic-override={overrides.button}
                    className={classNames("__wab_instance", sty.button)}
                    onClick={args.onSubmit}
                    submitsForm={true}
                  >
                    {"Create"}
                  </Button>
                </section>
              </section>
            </section>
            <section className={classNames(projectcss.all, sty.section__oyztW)}>
              <p.Stack
                as={"section"}
                hasGap={true}
                className={classNames(projectcss.all, sty.section__aziYo)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___3KvY
                  )}
                >
                  {"Discover"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___0PqeN
                  )}
                >
                  {"Artworks"}
                </div>
              </p.Stack>
              <p.Stack
                as={"section"}
                hasGap={true}
                className={classNames(projectcss.all, sty.section__lQMo)}
              >
                <section
                  className={classNames(projectcss.all, sty.section___5GQcr)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___0Oi4D
                    )}
                  >
                    {"Editor's Choice"}
                  </div>
                </section>
                <section
                  className={classNames(projectcss.all, sty.section___9Cby3)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ciFlw
                    )}
                  >
                    {"Top Artworks"}
                  </div>
                </section>
                <section
                  className={classNames(projectcss.all, sty.section__rPtp6)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qHiC2
                    )}
                  >
                    {"Recent Artworks"}
                  </div>
                </section>
              </p.Stack>
              <section
                className={classNames(projectcss.all, sty.section__yQCvr)}
              >
                <DiscoverTile
                  className={classNames(
                    "__wab_instance",
                    sty.discoverTile__y0Crg
                  )}
                >
                  {true ? (
                    <div
                      data-plasmic-name={"freeBox"}
                      data-plasmic-override={overrides.freeBox}
                      className={classNames(projectcss.all, sty.freeBox)}
                    >
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__vpwBt)}
                        displayHeight={"auto" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"100%" as const}
                        displayMinHeight={"100%" as const}
                        displayMinWidth={"100%" as const}
                        displayWidth={"auto" as const}
                        loading={"lazy" as const}
                        src={{
                          src: wonder1687803881391JpgGl36XgdY,
                          fullWidth: 3072,
                          fullHeight: 2048,
                          aspectRatio: undefined,
                        }}
                      />
                    </div>
                  ) : null}
                </DiscoverTile>
                <DiscoverTile
                  className={classNames(
                    "__wab_instance",
                    sty.discoverTile__eLvgG
                  )}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__utzvm)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"100%" as const}
                    displayMinWidth={"100%" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: wonder1687803889615JpgPg6IigmVm,
                      fullWidth: 3072,
                      fullHeight: 2048,
                      aspectRatio: undefined,
                    }}
                  />
                </DiscoverTile>
                <DiscoverTile
                  className={classNames(
                    "__wab_instance",
                    sty.discoverTile__dhU1K
                  )}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__tqX9I)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"100%" as const}
                    displayMinWidth={"100%" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: wonder1687803903721JpgDdfctTQeb,
                      fullWidth: 3072,
                      fullHeight: 2048,
                      aspectRatio: undefined,
                    }}
                  />
                </DiscoverTile>
              </section>
            </section>
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg", "button", "freeBox"],
  svg: ["svg"],
  button: ["button"],
  freeBox: ["freeBox"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
  button: typeof Button;
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    button: makeNodeComponent("button"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: "",
    },
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
