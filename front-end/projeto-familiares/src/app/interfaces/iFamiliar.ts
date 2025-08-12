export interface IFamiliar {
    id?: string | null, 
    nome: string, 
    dataNascimento: Date, 
    identidade: string,
    identidadeAscendente?: string,
    descendentes?: Array<IFamiliar>
}