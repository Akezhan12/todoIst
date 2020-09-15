export type Props = {
    readonly tasks: ReadonlyArray<Task>;
    readonly onDeleteTask: (id: string) => void;
};

type Task = {
    readonly title: string;
    readonly completed: boolean;
    readonly id: string;
}
