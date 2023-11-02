
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class HoraMedica {
    _id?: string;
    @Prop({required: true})
    profesional: string;
    @Prop({required: true})
    fecha: String;
    //fecha: Date;
    @Prop({required: true})
    //hora: Date;
    hora: String;
    paciente: string;
    @Prop({default: ['true'] })
    status: boolean;
}

export const HoraMedicaSchema = SchemaFactory.createForClass( HoraMedica );
