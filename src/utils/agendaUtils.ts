import type { ConsultaFiltro } from "../types/Agenda";
import type { UsuarioPaciente } from "../types/Usuarios";

export function filtrarPacientesAgenda(
  pacientes: UsuarioPaciente[],
  filtros: ConsultaFiltro
): UsuarioPaciente[] {
  const { periodo, diaSemana } = filtros;
  if (!periodo || !diaSemana) return [];
  
  return pacientes.filter(
    (p) =>
      (p as any).preferenciasAtendimento?.some(
        (pref: any) =>
          pref.periodo === periodo && pref.diaSemana === diaSemana
      )
  );
}
