// En réseau il existe 2 protocoles bas niveau : TCP et UDP
// TCP est orienté connexion, fiable, et garantit la livraison des paquets dans l'ordre
// UDP est non orienté connexion, non fiable, et ne garantit pas la livraison des paquets dans l'ordre

// Sur le web, on utilise principalement HTTP (qui est basé sur TCP)
// Pour une communication VOIP en temps réel, on utilise WebRTC (qui est basé sur UDP)

// Dans node.js, on peut utiliser le module 'net' pour créer des serveurs et des clients TCP
