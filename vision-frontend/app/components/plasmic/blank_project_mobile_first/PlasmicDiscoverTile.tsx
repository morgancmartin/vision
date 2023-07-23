// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iTJnNP8tTWeqztkYCLWG3v
// Component: 0sKOrKoeNa

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
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources"; // plasmic-import: R80r8yGEZBfwnm/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project_mobile_first.module.css"; // plasmic-import: iTJnNP8tTWeqztkYCLWG3v/projectcss
import sty from "./PlasmicDiscoverTile.module.css"; // plasmic-import: 0sKOrKoeNa/css

createPlasmicElementProxy;

export type PlasmicDiscoverTile__VariantMembers = {};
export type PlasmicDiscoverTile__VariantsArgs = {};
type VariantPropType = keyof PlasmicDiscoverTile__VariantsArgs;
export const PlasmicDiscoverTile__VariantProps = new Array<VariantPropType>();

export type PlasmicDiscoverTile__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicDiscoverTile__ArgsType;
export const PlasmicDiscoverTile__ArgProps = new Array<ArgPropType>("children");

export type PlasmicDiscoverTile__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultDiscoverTileProps {
  children?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicDiscoverTile__RenderFunc(props: {
  variants: PlasmicDiscoverTile__VariantsArgs;
  args: PlasmicDiscoverTile__ArgsType;
  overrides: PlasmicDiscoverTile__OverridesType;
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
      {p.renderPlasmicSlot({
        defaultContents: (
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img___3VsK)}
            displayHeight={"auto" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"100%" as const}
            displayMinHeight={"100%" as const}
            displayMinWidth={"100%" as const}
            displayWidth={"auto" as const}
            loading={"lazy" as const}
          />
        ),

        value: args.children,
      })}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDiscoverTile__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDiscoverTile__VariantsArgs;
    args?: PlasmicDiscoverTile__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDiscoverTile__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDiscoverTile__ArgsType,
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
          internalArgPropNames: PlasmicDiscoverTile__ArgProps,
          internalVariantPropNames: PlasmicDiscoverTile__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicDiscoverTile__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDiscoverTile";
  } else {
    func.displayName = `PlasmicDiscoverTile.${nodeName}`;
  }
  return func;
}

export const PlasmicDiscoverTile = Object.assign(
  // Top-level PlasmicDiscoverTile renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicDiscoverTile
    internalVariantProps: PlasmicDiscoverTile__VariantProps,
    internalArgProps: PlasmicDiscoverTile__ArgProps,
  }
);

export default PlasmicDiscoverTile;
/* prettier-ignore-end */
