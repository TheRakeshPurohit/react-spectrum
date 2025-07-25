/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {
  AnimationEventHandler,
  AriaAttributes,
  AriaRole,
  ClipboardEventHandler,
  CompositionEventHandler,
  CSSProperties,
  FormEventHandler,
  HTMLAttributeAnchorTarget,
  HTMLAttributeReferrerPolicy,
  MouseEventHandler,
  PointerEventHandler,
  DOMAttributes as ReactDOMAttributes,
  ReactEventHandler,
  TouchEventHandler,
  TransitionEventHandler,
  UIEventHandler,
  WheelEventHandler
} from 'react';

export interface AriaLabelingProps {
  /**
   * Defines a string value that labels the current element.
   */
  'aria-label'?: string,

  /**
   * Identifies the element (or elements) that labels the current element.
   */
  'aria-labelledby'?: string,

  /**
   * Identifies the element (or elements) that describes the object.
   */
  'aria-describedby'?: string,

  /**
   * Identifies the element (or elements) that provide a detailed, extended description for the object.
   */
  'aria-details'?: string
}

export interface AriaValidationProps {
  // https://www.w3.org/TR/wai-aria-1.2/#aria-errormessage
  /**
   * Identifies the element that provides an error message for the object.
   */
  'aria-errormessage'?: string
}

// A set of common DOM props that are allowed on any component
// Ensure this is synced with DOMPropNames in filterDOMProps
export interface DOMProps {
  /**
   * The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).
   */
  id?: string
}

export interface FocusableDOMProps extends DOMProps {
  /**
   * Whether to exclude the element from the sequential tab order. If true,
   * the element will not be focusable via the keyboard by tabbing. This should
   * be avoided except in rare scenarios where an alternative means of accessing
   * the element or its functionality via the keyboard is available.
   */
  excludeFromTabOrder?: boolean
}


export interface TextInputDOMEvents {
  // Clipboard events
  /**
   * Handler that is called when the user copies text. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncopy).
   */
   onCopy?: ClipboardEventHandler<HTMLInputElement>,

   /**
    * Handler that is called when the user cuts text. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncut).
    */
   onCut?: ClipboardEventHandler<HTMLInputElement>,

   /**
    * Handler that is called when the user pastes text. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/onpaste).
    */
   onPaste?: ClipboardEventHandler<HTMLInputElement>,

   // Composition events
   /**
    * Handler that is called when a text composition system starts a new text composition session. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionstart_event).
    */
   onCompositionStart?: CompositionEventHandler<HTMLInputElement>,

   /**
    * Handler that is called when a text composition system completes or cancels the current text composition session. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionend_event).
    */
   onCompositionEnd?: CompositionEventHandler<HTMLInputElement>,

   /**
    * Handler that is called when a new character is received in the current text composition session. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionupdate_event).
    */
   onCompositionUpdate?: CompositionEventHandler<HTMLInputElement>,

   // Selection events
   /**
    * Handler that is called when text in the input is selected. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/select_event).
    */
   onSelect?: ReactEventHandler<HTMLInputElement>,

   // Input events
   /**
    * Handler that is called when the input value is about to be modified. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforeinput_event).
    */
   onBeforeInput?: FormEventHandler<HTMLInputElement>,
   /**
    * Handler that is called when the input value is modified. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event).
    */
   onInput?: FormEventHandler<HTMLInputElement>
}

export interface InputDOMProps {
  /**
   * The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).
   */
  name?: string,
  /**
   * The `<form>` element to associate the input with.
   * The value of this attribute must be the id of a `<form>` in the same document.
   * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form).
   */
  form?: string
}

// DOM props that apply to all text inputs
// Ensure this is synced with useTextField
export interface TextInputDOMProps extends DOMProps, InputDOMProps, TextInputDOMEvents {
  /**
   * Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).
   */
  autoComplete?: string,

  /**
   * The maximum number of characters supported by the input. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength).
   */
  maxLength?: number,

  /**
   * The minimum number of characters required by the input. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefminlength).
   */
  minLength?: number,

  /**
   * Regex pattern that the value of the input must match to be valid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern).
   */
  pattern?: string,

  /**
   * Content that appears in the input when it is empty. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefplaceholder).
   */
  placeholder?: string,

  /**
   * The type of input to render. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdeftype).
   */
  type?: 'text' | 'search' | 'url' | 'tel' | 'email' | 'password' | (string & {}),

  /**
   * Hints at the type of data that might be entered by the user while editing the element or its contents. See [MDN](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute).
   */
  inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search',

  /**
   * An attribute that takes as its value a space-separated string that describes what, if any, type of autocomplete functionality the input should provide. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#autocomplete).
   */
  autoCorrect?: string,

  /**
   * An enumerated attribute that defines whether the element may be checked for spelling errors. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck).
   */
  spellCheck?: string
}

/**
 * This type allows configuring link props with router options and type-safe URLs via TS module augmentation.
 * By default, this is an empty type. Extend with `href` and `routerOptions` properties to configure your router.
 */
export interface RouterConfig {}

export type Href = RouterConfig extends {href: infer H} ? H : string;
export type RouterOptions = RouterConfig extends {routerOptions: infer O} ? O : never;

// Make sure to update filterDOMProps.ts when updating this.
export interface LinkDOMProps {
  /** A URL to link to. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href). */
  href?: Href,
  /** Hints at the human language of the linked URL. See[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#hreflang). */
  hrefLang?: string,
  /** The target window for the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target). */
  target?: HTMLAttributeAnchorTarget,
  /** The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel). */
  rel?: string,
  /** Causes the browser to download the linked URL. A string may be provided to suggest a file name. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download). */
  download?: boolean | string,
  /** A space-separated list of URLs to ping when the link is followed. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#ping). */
  ping?: string,
  /** How much of the referrer to send when following the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#referrerpolicy). */
  referrerPolicy?: HTMLAttributeReferrerPolicy,
  /** Options for the configured client side router. */
  routerOptions?: RouterOptions
}

/** Any focusable element, including both HTML and SVG elements. */
export interface FocusableElement extends Element, HTMLOrSVGElement {}

/** All DOM attributes supported across both HTML and SVG elements. */
export interface DOMAttributes<T = FocusableElement> extends AriaAttributes, ReactDOMAttributes<T> {
  id?: string | undefined,
  role?: AriaRole | undefined,
  tabIndex?: number | undefined,
  style?: CSSProperties | undefined,
  className?: string | undefined
}

export interface GroupDOMAttributes extends Omit<DOMAttributes<HTMLElement>, 'role'> {
  role?: 'group' | 'region' | 'presentation'
}

/**
 * Global attributes that can be applied to any DOM element.
 * @private
 */
// NOTE: id is handled elsewhere (DOMProps).
export interface GlobalDOMAttributes<T = Element> extends GlobalDOMEvents<T> {
  dir?: string | undefined,
  lang?: string | undefined,
  hidden?: boolean | undefined,
  inert?: boolean | undefined,
  translate?: 'yes' | 'no' | undefined
}

/**
 * Global DOM events that are supported on all DOM elements.
 * @private
 */
// NOTES:
//   - Drag and drop events are omitted for now.
//   - Keyboard and focus events are supported directly on focusable elements (FocusableProps).
//   - Text input events (e.g. onInput, onCompositionStart, onCopy) are 
//     supported only directly on input elements (TextInputDOMProps).
//     We don't support contentEditable on our components.
//   - Media events should be handled directly on the <video>/<audio><img> element.
export interface GlobalDOMEvents<T = Element> {
  // MouseEvents
  onClick?: MouseEventHandler<T> | undefined,
  onClickCapture?: MouseEventHandler<T> | undefined,
  onAuxClick?: MouseEventHandler<T> | undefined,
  onAuxClickCapture?: MouseEventHandler<T> | undefined,
  onContextMenu?: MouseEventHandler<T> | undefined,
  onContextMenuCapture?: MouseEventHandler<T> | undefined,
  onDoubleClick?: MouseEventHandler<T> | undefined,
  onDoubleClickCapture?: MouseEventHandler<T> | undefined,
  onMouseDown?: MouseEventHandler<T> | undefined,
  onMouseDownCapture?: MouseEventHandler<T> | undefined,
  onMouseEnter?: MouseEventHandler<T> | undefined,
  onMouseLeave?: MouseEventHandler<T> | undefined,
  onMouseMove?: MouseEventHandler<T> | undefined,
  onMouseMoveCapture?: MouseEventHandler<T> | undefined,
  onMouseOut?: MouseEventHandler<T> | undefined,
  onMouseOutCapture?: MouseEventHandler<T> | undefined,
  onMouseOver?: MouseEventHandler<T> | undefined,
  onMouseOverCapture?: MouseEventHandler<T> | undefined,
  onMouseUp?: MouseEventHandler<T> | undefined,
  onMouseUpCapture?: MouseEventHandler<T> | undefined,

  // Touch Events
  onTouchCancel?: TouchEventHandler<T> | undefined,
  onTouchCancelCapture?: TouchEventHandler<T> | undefined,
  onTouchEnd?: TouchEventHandler<T> | undefined,
  onTouchEndCapture?: TouchEventHandler<T> | undefined,
  onTouchMove?: TouchEventHandler<T> | undefined,
  onTouchMoveCapture?: TouchEventHandler<T> | undefined,
  onTouchStart?: TouchEventHandler<T> | undefined,
  onTouchStartCapture?: TouchEventHandler<T> | undefined,

  // Pointer Events
  onPointerDown?: PointerEventHandler<T> | undefined,
  onPointerDownCapture?: PointerEventHandler<T> | undefined,
  onPointerMove?: PointerEventHandler<T> | undefined,
  onPointerMoveCapture?: PointerEventHandler<T> | undefined,
  onPointerUp?: PointerEventHandler<T> | undefined,
  onPointerUpCapture?: PointerEventHandler<T> | undefined,
  onPointerCancel?: PointerEventHandler<T> | undefined,
  onPointerCancelCapture?: PointerEventHandler<T> | undefined,
  onPointerEnter?: PointerEventHandler<T> | undefined,
  onPointerLeave?: PointerEventHandler<T> | undefined,
  onPointerOver?: PointerEventHandler<T> | undefined,
  onPointerOverCapture?: PointerEventHandler<T> | undefined,
  onPointerOut?: PointerEventHandler<T> | undefined,
  onPointerOutCapture?: PointerEventHandler<T> | undefined,
  onGotPointerCapture?: PointerEventHandler<T> | undefined,
  onGotPointerCaptureCapture?: PointerEventHandler<T> | undefined,
  onLostPointerCapture?: PointerEventHandler<T> | undefined,
  onLostPointerCaptureCapture?: PointerEventHandler<T> | undefined,

  // UI Events
  onScroll?: UIEventHandler<T> | undefined,
  onScrollCapture?: UIEventHandler<T> | undefined,

  // Wheel Events
  onWheel?: WheelEventHandler<T> | undefined,
  onWheelCapture?: WheelEventHandler<T> | undefined,

  // Animation Events
  onAnimationStart?: AnimationEventHandler<T> | undefined,
  onAnimationStartCapture?: AnimationEventHandler<T> | undefined,
  onAnimationEnd?: AnimationEventHandler<T> | undefined,
  onAnimationEndCapture?: AnimationEventHandler<T> | undefined,
  onAnimationIteration?: AnimationEventHandler<T> | undefined,
  onAnimationIterationCapture?: AnimationEventHandler<T> | undefined,

  // Transition Events
  onTransitionCancel?: TransitionEventHandler<T> | undefined,
  onTransitionCancelCapture?: TransitionEventHandler<T> | undefined,
  onTransitionEnd?: TransitionEventHandler<T> | undefined,
  onTransitionEndCapture?: TransitionEventHandler<T> | undefined,
  onTransitionRun?: TransitionEventHandler<T> | undefined,
  onTransitionRunCapture?: TransitionEventHandler<T> | undefined,
  onTransitionStart?: TransitionEventHandler<T> | undefined,
  onTransitionStartCapture?: TransitionEventHandler<T> | undefined
}
