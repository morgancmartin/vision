// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iTJnNP8tTWeqztkYCLWG3v
// Component: uZPn8ps5Tw

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
import sty from "./PlasmicResultTile.module.css"; // plasmic-import: uZPn8ps5Tw/css

createPlasmicElementProxy;

export type PlasmicResultTile__VariantMembers = {};
export type PlasmicResultTile__VariantsArgs = {};
type VariantPropType = keyof PlasmicResultTile__VariantsArgs;
export const PlasmicResultTile__VariantProps = new Array<VariantPropType>();

export type PlasmicResultTile__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicResultTile__ArgsType;
export const PlasmicResultTile__ArgProps = new Array<ArgPropType>("children");

export type PlasmicResultTile__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultResultTileProps {
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

function PlasmicResultTile__RenderFunc(props: {
  variants: PlasmicResultTile__VariantsArgs;
  args: PlasmicResultTile__ArgsType;
  overrides: PlasmicResultTile__OverridesType;
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
            className={classNames(sty.img__wNQr5)}
            displayHeight={"94%" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"100%" as const}
            displayMinHeight={"100%" as const}
            displayMinWidth={"100%" as const}
            displayWidth={"635px" as const}
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
  PlasmicResultTile__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicResultTile__VariantsArgs;
    args?: PlasmicResultTile__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicResultTile__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicResultTile__ArgsType,
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
          internalArgPropNames: PlasmicResultTile__ArgProps,
          internalVariantPropNames: PlasmicResultTile__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicResultTile__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicResultTile";
  } else {
    func.displayName = `PlasmicResultTile.${nodeName}`;
  }
  return func;
}

export const PlasmicResultTile = Object.assign(
  // Top-level PlasmicResultTile renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicResultTile
    internalVariantProps: PlasmicResultTile__VariantProps,
    internalArgProps: PlasmicResultTile__ArgProps,
  }
);

export default PlasmicResultTile;
/* prettier-ignore-end */
