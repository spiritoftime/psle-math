import { burger } from "@/app/domain/burgers";

export function dtoToBurgers(dto: burgerDTO[]): burger[] {
    return dto.map((burger) => ({
        name: burger.name,
        id: burger.id,
    }));
}
