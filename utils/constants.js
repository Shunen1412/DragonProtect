const MESSAGES = {
  COMMANDS: {
    ADMIN: {
      CONFIG: {
        name: "config",
        aliases: ['config', 'setup'],
        category: 'admin',
        description: "Modifie la base de données.",
        cooldown: 10,
        usage: "<key> <value>",
        isUserAdmin: false,
        permissions : true,
        args: true
      },
      EVAL: {
        name: "eval",
        aliases: ['eval'],
        category: 'admin',
        description: "Renvoie un code js testé.",
        cooldown: 10,
        usage: "<code_to_test>",
        isUserAdmin: false,
        permissions : true,
        args: true
      }
    },
    AUTRE: {
      SHUNEN: {
        name: "shunen",
        aliases: ['shunen', 'createur'],
        category: 'utilitaires',
        description: "Renvoie le nom du createur du bot.",
        cooldown: 10,
        usage: "<nom_de_la_commande>",
        isUserAdmin: false,
        permissions : false,
        args: false
      }
    },
    MODERATION: {
      CLEAR: {
        name: "clear",
        aliases: ['clear', 'purge'],
        category: 'moderation',
        description: "Purge un nombre définie de message sur le channel ou est appliquer la commande.",
        cooldown: 10,
        usage: '<nombre_de_messages>',
        isUserAdmin: false,
        permissions : true,
        args: true
      },
      KICK: {
        name: "kick",
        aliases: ['kick'],
        category: 'moderation',
        description: "kick l'utilisateur mentionné du serveur.",
        cooldown: 10,
        usage: '<@user> <raison>',
        isUserAdmin: true,
        permissions : true,
        args: true
      },
      BAN: {
        name: "ban",
        aliases: ['ban'],
        category: 'moderation',
        description: "Ban l'utilisateur mentionné du serveur.",
        cooldown: 10,
        usage: '<@user> <raison>',
        isUserAdmin: true,
        permissions : true,
        args: true
      },
      UNBAN: {
        name: "unban",
        aliases: ['unban'],
        category: 'moderation',
        description: "Unban l'utilisateur mentionné du serveur.",
        cooldown: 10,
        usage: '<user_id>',
        isUserAdmin: false,
        permissions : true,
        args: true
      },
      MUTE: {
        name: "mute",
        aliases: ['mute'],
        category: 'moderation',
        description: "Mute l'utilisateur mentionné du serveur.",
        cooldown: 10,
        usage: '<@user> <time>',
        isUserAdmin: true,
        permissions : true,
        args: true
      },
      UNMUTE: {
        name: "unmute",
        aliases: ['unmute'],
        category: 'moderation',
        description: "Unmute l'utilisateur mentionné du serveur.",
        cooldown: 10,
        usage: '<@user>',
        isUserAdmin: true,
        permissions : true,
        args: true
      }
    },
    REACTION: {
      ALLROLES: {
        name: "allemotions",
        aliases: ['allemotions'],
        category: 'reactions',
        description: "Renvoie un message a reactions.",
        cooldown: 10,
        usage: '',
        isUserAdmin: false,
        permissions : false,
        args: false
      }
    },
    UTILITAIRE: {
      HELP: {
        name: "help",
        aliases: ['help'],
        category: 'utilitaires',
        description: "Renvoie le panel d'aide du bot.",
        cooldown: 10,
        usage: "<nom_de_la_commande>",
        isUserAdmin: false,
        permissions : false,
        args: false
      },
      RELOAD: {
        name: "reload",
        aliases: ['reload'],
        description: "Redemare le bot.",
        cooldown: 10,
        usage: '<votre_message>',
        isUserAdmin: false,
        permissions : false,
        args: false
      },
      SAY: {
        name: "say",
        aliases: ['say'],
        category: 'utilitaires',
        description: "Renvoie le meme message mais envoyer par le bot.",
        cooldown: 10,
        usage: '<votre_message>',
        isUserAdmin: false,
        permissions : false,
        args: true
      },
    }
  }
}

exports.MESSAGES = MESSAGES;