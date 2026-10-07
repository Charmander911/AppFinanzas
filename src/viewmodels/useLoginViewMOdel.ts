import { router } from "expo-router";
import { useState } from "AppFinanzas";

export function useLoginViewMOdel(){
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
}