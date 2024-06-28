import { v4 as uuidv4 } from 'uuid';

export class task{
    id: string;
    titulo: string;
    descricao: string;
    status: 'ABERTA' | 'FEITA' | 'EM ANDAMENTO';

    // no constructor, não é necessário inicializar com todos os parâmetros da classe
    constructor(titulo: string, descricao:string){
        this.id = uuidv4(); //uuid -> identificador único e universal
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = 'ABERTA'
    }

    /* this está se referenciando ao objeto que está sendo criado, ou seja,
    this.descricao = descricao; está dizendo que, a descrição do objeto criado vai ser
    a descrição vinda do parâmetro da classe.
    */

    /* Super: usamos o super para utilizar a construção da classe mãe para atribuir valor
    ao objeto criado na classe filho  */
    
}


// Em ts, podemos usar da tipagem composta nas variáveis, definindo que a variável só recebe um valor ou outro 