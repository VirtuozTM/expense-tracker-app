import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  QueryConstraint,
} from "firebase/firestore";
import { firestore } from "@/config/firebase";

const useFetchData = <T>(
  collectionName: string, // nom de la collection à récupérer
  constraints: QueryConstraint[] = [] // tablerau d'option pour filtrer les résultats
) => {
  const [data, setData] = useState<T[]>([]); //stocke les données récupérés
  const [loading, setLoading] = useState(true); // indique si les données sont en cours de chargement
  const [error, setError] = useState<string | null>(null); // stocke un message d'erreur

  useEffect(() => {
    if (!collectionName) return;
    const collectionRef = collection(firestore, collectionName);
    const q = query(collectionRef, ...constraints);

    const unsub = onSnapshot(
      q,
      (snapshot) => {
        const fetchData = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        }) as T[];
        setData(fetchData);
        setLoading(false);
      },
      (err) => {
        console.log(err);
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsub();
  }, []);
  return { data, loading, error };
};

export default useFetchData;

const styles = StyleSheet.create({});
