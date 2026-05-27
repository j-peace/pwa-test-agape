const PREFIX = "agape_demo_";

export const EXPECTED_GUESTS = 150;

export interface CheckInState {
  alineCheckedIn: boolean;
  entryCount: number;
  lastQr?: string;
  offlineMode: boolean;
}

const defaultState = (): CheckInState => ({
  alineCheckedIn: false,
  entryCount: 0,
  offlineMode: false,
});

export function getState(): CheckInState {
  try {
    const raw = localStorage.getItem(`${PREFIX}state`);
    if (!raw) return defaultState();
    return { ...defaultState(), ...JSON.parse(raw) };
  } catch {
    return defaultState();
  }
}

export function setState(partial: Partial<CheckInState>): CheckInState {
  const next = { ...getState(), ...partial };
  localStorage.setItem(`${PREFIX}state`, JSON.stringify(next));
  return next;
}

export function resetDemo(): void {
  localStorage.removeItem(`${PREFIX}state`);
}

export const VALID_CPFS: Record<string, string> = {
  "98765432100": "Aline",
  "11122233344": "Carlos Silva",
  "22233344455": "Mariana Costa",
  "33344455566": "João Pedro",
  "44455566677": "Fernanda Lima",
  "55566677788": "Ricardo Souza",
  "66677788899": "Patrícia Alves",
  "77788899900": "Lucas Mendes",
  "88899900011": "Camila Rocha",
  "99900011122": "Bruno Ferreira",
  "10020030040": "Juliana Dias",
};

export function normalizeCpf(value: string): string {
  return value.replace(/\D/g, "");
}
