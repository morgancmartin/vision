// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iTJnNP8tTWeqztkYCLWG3v
// Component: BHBxKjySiY

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
import sty from "./PlasmicStyleTile.module.css"; // plasmic-import: BHBxKjySiY/css

createPlasmicElementProxy;

export type PlasmicStyleTile__VariantMembers = {
  selected: "selected";
};
export type PlasmicStyleTile__VariantsArgs = {
  selected?: SingleBooleanChoiceArg<"selected">;
};
type VariantPropType = keyof PlasmicStyleTile__VariantsArgs;
export const PlasmicStyleTile__VariantProps = new Array<VariantPropType>(
  "selected"
);

export type PlasmicStyleTile__ArgsType = {
  children?: React.ReactNode;
  isSelected?: boolean;
  onIsSelectedChange?: (val: boolean) => void;
  index?: number;
  onIndexChange?: (val: number) => void;
  imageSrc?: string;
  onClick?: () => void;
  labelText?: string;
};
type ArgPropType = keyof PlasmicStyleTile__ArgsType;
export const PlasmicStyleTile__ArgProps = new Array<ArgPropType>(
  "children",
  "isSelected",
  "onIsSelectedChange",
  "index",
  "onIndexChange",
  "imageSrc",
  "onClick",
  "labelText"
);

export type PlasmicStyleTile__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  text?: p.Flex<"div">;
};

export interface DefaultStyleTileProps {
  children?: React.ReactNode;
  isSelected?: boolean;
  onIsSelectedChange?: (val: boolean) => void;
  index?: number;
  onIndexChange?: (val: number) => void;
  imageSrc?: string;
  onClick?: () => void;
  labelText?: string;
  selected?: SingleBooleanChoiceArg<"selected">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicStyleTile__RenderFunc(props: {
  variants: PlasmicStyleTile__VariantsArgs;
  args: PlasmicStyleTile__ArgsType;
  overrides: PlasmicStyleTile__OverridesType;
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

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "isSelected",
        type: "writable",
        variableType: "boolean",

        valueProp: "isSelected",
        onChangeProp: "onIsSelectedChange",
      },
      {
        path: "index",
        type: "writable",
        variableType: "number",

        valueProp: "index",
        onChangeProp: "onIndexChange",
      },
      {
        path: "selected",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.selected,
      },
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries,
    $refs,
  });

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
        sty.root,
        { [sty.rootselected]: hasVariant($state, "selected", "selected") }
      )}
      onClick={async (event) => {
        const $steps = {};
        $steps["runCode"] = true
          ? (() => {
              const actionArgs = {
                customFunction: __wrapUserFunction(
                  {
                    type: "InteractionArgLoc",
                    actionName: "customFunction",
                    interactionUuid: "QCHQSoGtQ",
                    componentUuid: "BHBxKjySiY",
                    argName: "customFunction",
                  },
                  () => () => {
                    return $props.onClick();
                  }
                ),
              };
              return __wrapUserFunction(
                {
                  type: "InteractionLoc",
                  actionName: "customFunction",
                  interactionUuid: "QCHQSoGtQ",
                  componentUuid: "BHBxKjySiY",
                },
                () =>
                  (({ customFunction }) => {
                    return customFunction();
                  })?.apply(null, [actionArgs]),
                actionArgs
              );
            })()
          : undefined;
        if (
          typeof $steps["runCode"] === "object" &&
          typeof $steps["runCode"].then === "function"
        ) {
          $steps["runCode"] = await __wrapUserPromise(
            {
              type: "InteractionLoc",
              actionName: "customFunction",
              interactionUuid: "QCHQSoGtQ",
              componentUuid: "BHBxKjySiY",
            },
            $steps["runCode"]
          );
        }
      }}
    >
      {true ? (
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox, {
            [sty.freeBoxselected]: hasVariant($state, "selected", "selected"),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__wy0YJ)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"100%" as const}
                displayMinWidth={"100%" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                src={(() => {
                  try {
                    return $props.imageSrc;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "https://site-assets.plasmic.app/f9c235b0068e4d3da3b19ee606a4b288.jpg";
                    }
                    throw e;
                  }
                })()}
              />
            ),

            value: args.children,
          })}
        </div>
      ) : null}
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text, {
          [sty.textselected]: hasVariant($state, "selected", "selected"),
        })}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.labelText;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "text"],
  freeBox: ["freeBox"],
  text: ["text"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicStyleTile__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicStyleTile__VariantsArgs;
    args?: PlasmicStyleTile__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicStyleTile__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicStyleTile__ArgsType,
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
          internalArgPropNames: PlasmicStyleTile__ArgProps,
          internalVariantPropNames: PlasmicStyleTile__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicStyleTile__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicStyleTile";
  } else {
    func.displayName = `PlasmicStyleTile.${nodeName}`;
  }
  return func;
}

export const PlasmicStyleTile = Object.assign(
  // Top-level PlasmicStyleTile renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicStyleTile
    internalVariantProps: PlasmicStyleTile__VariantProps,
    internalArgProps: PlasmicStyleTile__ArgProps,
  }
);

export default PlasmicStyleTile;
/* prettier-ignore-end */
