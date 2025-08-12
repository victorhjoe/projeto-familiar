export interface IFamiliar {
    id?: Number, 
    nome: string, 
    dataNascimento: Date, 
    identidade: string,
    identidadeAscendente?: string,
    descendentes?: Array<IFamiliar>
}