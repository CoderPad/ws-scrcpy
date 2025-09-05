import { ToolBoxElement } from './ToolBoxElement';

export class ToolBox {
    private readonly holder: HTMLElement;

    constructor(_list: ToolBoxElement<any>[]) {
        this.holder = document.createElement('div');
        this.holder.classList.add('control-buttons-list', 'control-wrapper');
    }

    public getHolderElement(): HTMLElement {
        return this.holder;
    }
}
