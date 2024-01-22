/// <reference types="react" />
import * as react from 'react';
import { ReactNode, Dispatch, SetStateAction, MouseEventHandler, FormEventHandler } from 'react';
import { LucideIcon } from 'lucide-react';
import { FieldValues, UseFormRegister, Path, RegisterOptions } from 'react-hook-form';
import { Config } from 'tailwindcss';

type FullScreenOverlayProps = {
    buttonLabel?: string;
    children: ReactNode;
} & ({
    type: "close";
    show: boolean;
    setShow?: Dispatch<SetStateAction<boolean>>;
} | {
    type: "back";
    show?: never;
    setShow?: never;
});
declare function FullScreenOverlay({ show, setShow, type, buttonLabel, children, }: FullScreenOverlayProps): react.JSX.Element;

interface CircleSkeletonProps {
    circle: true;
    size: number;
}
interface BasicTextSkeletonProps {
    circle?: never;
    textClass: "text-xs" | "text-sm" | "text-base" | "text-lg" | "text-xl" | "text-2xl" | "text-3xl" | "text-4xl";
}
interface LinesTextSkeletonProps extends BasicTextSkeletonProps {
    lines: number;
}
interface CharactersTextSkeletonProps extends BasicTextSkeletonProps {
    characters: number;
}
type TextSkeletonProps = LinesTextSkeletonProps | CharactersTextSkeletonProps;
type SkeletonProps = TextSkeletonProps | CircleSkeletonProps;
declare function Skeleton(props: SkeletonProps): react.JSX.Element;

interface ButtonWithHref extends Button {
    href: string;
    newTab?: boolean;
    onClick?: never;
}
interface ButtonWithOnClick extends Button {
    href?: never;
    newTab?: never;
    onClick: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}
interface Button {
    primary?: boolean;
    isLoading?: boolean;
    disabled?: boolean;
    icon?: LucideIcon;
    text?: string;
}
declare function Button({ primary, isLoading, disabled, icon: Icon, text, onClick, href, newTab, }: ButtonWithHref | ButtonWithOnClick): react.JSX.Element;

interface ToggleProps {
    title: string;
    description?: string;
    disabled?: boolean;
    isOn: boolean;
    setIsOn: Dispatch<SetStateAction<boolean>>;
}
declare function Toggle({ title, description, disabled, isOn, setIsOn, }: ToggleProps): react.JSX.Element;

interface CheckboxProps<T extends FieldValues> {
    register: UseFormRegister<T>;
    name: Path<T>;
    options?: RegisterOptions;
    title: string;
    description?: string;
}
declare function Checkbox<T extends FieldValues>({ register, options, title, description, name, }: CheckboxProps<T>): react.JSX.Element;

interface Item {
    value: string;
    icon: LucideIcon;
}
interface SelectorProps<T extends FieldValues> {
    register: UseFormRegister<T>;
    name: Path<T>;
    options?: RegisterOptions;
    title: string;
    items: Item[];
    gridCols: "grid-cols-1" | "grid-cols-2" | "grid-cols-3" | "grid-cols-4" | "grid-cols-5" | "grid-cols-6" | "grid-cols-7" | "grid-cols-8" | "grid-cols-9" | "grid-cols-10" | "grid-cols-11" | "grid-cols-12";
    error?: string;
}
declare function Selector<T extends FieldValues>({ register, name, options, items, title, gridCols, error, }: SelectorProps<T>): react.JSX.Element;

interface TextAreaProps<T extends FieldValues> {
    register: UseFormRegister<T>;
    name: Path<T>;
    options?: RegisterOptions;
    title: string;
    rows: number;
    placeholder: string;
    error?: string;
}
declare function TextArea<T extends FieldValues>({ register, name, options, title, rows, placeholder, error, }: TextAreaProps<T>): react.JSX.Element;

type TextInputType = "text" | "number" | "email" | "tel" | "url";
interface TextInputProps<T extends FieldValues> {
    register: UseFormRegister<T>;
    name: Path<T>;
    options?: RegisterOptions;
    title: string;
    type: TextInputType;
    placeholder: string;
    prefix?: string;
    suffix?: string;
    error?: string;
}
declare function TextInput<T extends FieldValues>({ register, name, options, type, title, placeholder, prefix, suffix, error, }: TextInputProps<T>): react.JSX.Element;

type Tabs = TabBarItemProps[];
interface TabBarItemProps {
    icon: LucideIcon;
    text: string;
    href: string;
}

interface BottomToolbarProps<T extends FieldValues> {
    primaryButton?: {
        icon?: LucideIcon;
        text?: string;
        isLoading: boolean;
        disabled?: boolean;
        onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
        href?: string;
    };
    input?: {
        register: UseFormRegister<T>;
        name: Path<T>;
        options?: RegisterOptions;
        type: TextInputType;
        placeholder: string;
        error?: string;
        onFormSubmit: FormEventHandler<HTMLFormElement | HTMLDivElement>;
    };
    secondaryButtons?: {
        icon: LucideIcon;
        isLoading: boolean;
        disabled?: boolean;
        onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
        href?: string;
        type?: "button" | "submit" | "reset";
    }[];
}

interface FloatingButtonProps {
    icon: LucideIcon;
    text?: string;
    href: string;
    isTabBarHiddenOnMobile?: boolean;
}

interface HeaderProps {
    background: boolean;
    backButton?: boolean;
    title?: string;
}

interface TabBarProps {
    hideOnMobile?: boolean;
    items: Tabs;
    gridCols: "grid-cols-2" | "grid-cols-3" | "grid-cols-4" | "grid-cols-5" | "grid-cols-6";
}

interface LayoutProps<T extends FieldValues> {
    header?: HeaderProps;
    tabBar: TabBarProps;
    has?: {
        floatingButton?: FloatingButtonProps;
        bottomToolbar?: BottomToolbarProps<T>;
    };
    children: ReactNode;
}
declare function Layout<T extends FieldValues>({ header, tabBar, has, children, }: LayoutProps<T>): react.JSX.Element;

declare const te6TailwindPreset: Config;

declare function j(...classNames: string[]): string;

export { Button, Checkbox, FullScreenOverlay, Layout, Selector, Skeleton, type Tabs, TextArea, TextInput, Toggle, j, te6TailwindPreset };
