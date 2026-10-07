export interface Gasto {
    id: String;
    monto: number;
    categoria: string;
    fecha: Date;
}

export const CATEGORIAS = ['comida', 'transporte','servicios','entretenimiento','otro'];