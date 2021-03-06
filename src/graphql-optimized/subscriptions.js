/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction {
    onCreateTransaction {
      id
      transactionType
      staffUser {
        id
        firstName
        lastName
        phone
        signInStatus
        email
        itemRecord {
          nextToken
        }
        workstation {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        workstationId
        conductRecord
        conductStatus
        reservations {
          nextToken
        }
        transactionRecord {
          nextToken
        }
        createdAt
        updatedAt
      }
      staffUserId
      user {
        id
        firstName
        lastName
        phone
        signInStatus
        email
        itemRecord {
          nextToken
        }
        workstation {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        workstationId
        conductRecord
        conductStatus
        reservations {
          nextToken
        }
        transactionRecord {
          nextToken
        }
        createdAt
        updatedAt
      }
      userId
      tools
      materials
      reservations {
        items {
          id
          time
          userId
          toolId
          transactionGroup
          createdAt
          updatedAt
        }
        nextToken
      }
      reservationSlots
      requests
      transactionStatus
      transactionComment
      createdAt
      updatedAt
      version
    }
  }
`;
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction {
    onUpdateTransaction {
      id
      transactionType
      staffUser {
        id
        firstName
        lastName
        phone
        signInStatus
        email
        itemRecord {
          nextToken
        }
        workstation {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        workstationId
        conductRecord
        conductStatus
        reservations {
          nextToken
        }
        transactionRecord {
          nextToken
        }
        createdAt
        updatedAt
      }
      staffUserId
      user {
        id
        firstName
        lastName
        phone
        signInStatus
        email
        itemRecord {
          nextToken
        }
        workstation {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        workstationId
        conductRecord
        conductStatus
        reservations {
          nextToken
        }
        transactionRecord {
          nextToken
        }
        createdAt
        updatedAt
      }
      userId
      tools
      materials
      reservations {
        items {
          id
          time
          userId
          toolId
          transactionGroup
          createdAt
          updatedAt
        }
        nextToken
      }
      reservationSlots
      requests
      transactionStatus
      transactionComment
      createdAt
      updatedAt
      version
    }
  }
`;
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction {
    onDeleteTransaction {
      id
      transactionType
      staffUser {
        id
        firstName
        lastName
        phone
        signInStatus
        email
        itemRecord {
          nextToken
        }
        workstation {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        workstationId
        conductRecord
        conductStatus
        reservations {
          nextToken
        }
        transactionRecord {
          nextToken
        }
        createdAt
        updatedAt
      }
      staffUserId
      user {
        id
        firstName
        lastName
        phone
        signInStatus
        email
        itemRecord {
          nextToken
        }
        workstation {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        workstationId
        conductRecord
        conductStatus
        reservations {
          nextToken
        }
        transactionRecord {
          nextToken
        }
        createdAt
        updatedAt
      }
      userId
      tools
      materials
      reservations {
        items {
          id
          time
          userId
          toolId
          transactionGroup
          createdAt
          updatedAt
        }
        nextToken
      }
      reservationSlots
      requests
      transactionStatus
      transactionComment
      createdAt
      updatedAt
      version
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      firstName
      lastName
      phone
      signInStatus
      email
      itemRecord {
        items {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        nextToken
      }
      workstation {
        id
        name
        description
        location
        group {
          name
          count
          toolType
          createdAt
          updatedAt
        }
        toolStatus
        currentHolder {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        currentHolderId
        currentWorkstation {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        currentWorkstationId
        reservations {
          nextToken
        }
        transactionRecord {
          id
          transactionType
          staffUserId
          userId
          tools
          materials
          reservationSlots
          requests
          transactionStatus
          transactionComment
          createdAt
          updatedAt
          version
        }
        transactionRecordId
        toolType
        updatedAt
        createdAt
      }
      workstationId
      conductRecord
      conductStatus
      reservations {
        items {
          id
          time
          userId
          toolId
          transactionGroup
          createdAt
          updatedAt
        }
        nextToken
      }
      transactionRecord {
        items {
          id
          transactionType
          staffUserId
          userId
          tools
          materials
          reservationSlots
          requests
          transactionStatus
          transactionComment
          createdAt
          updatedAt
          version
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      firstName
      lastName
      phone
      signInStatus
      email
      itemRecord {
        items {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        nextToken
      }
      workstation {
        id
        name
        description
        location
        group {
          name
          count
          toolType
          createdAt
          updatedAt
        }
        toolStatus
        currentHolder {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        currentHolderId
        currentWorkstation {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        currentWorkstationId
        reservations {
          nextToken
        }
        transactionRecord {
          id
          transactionType
          staffUserId
          userId
          tools
          materials
          reservationSlots
          requests
          transactionStatus
          transactionComment
          createdAt
          updatedAt
          version
        }
        transactionRecordId
        toolType
        updatedAt
        createdAt
      }
      workstationId
      conductRecord
      conductStatus
      reservations {
        items {
          id
          time
          userId
          toolId
          transactionGroup
          createdAt
          updatedAt
        }
        nextToken
      }
      transactionRecord {
        items {
          id
          transactionType
          staffUserId
          userId
          tools
          materials
          reservationSlots
          requests
          transactionStatus
          transactionComment
          createdAt
          updatedAt
          version
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      firstName
      lastName
      phone
      signInStatus
      email
      itemRecord {
        items {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        nextToken
      }
      workstation {
        id
        name
        description
        location
        group {
          name
          count
          toolType
          createdAt
          updatedAt
        }
        toolStatus
        currentHolder {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        currentHolderId
        currentWorkstation {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        currentWorkstationId
        reservations {
          nextToken
        }
        transactionRecord {
          id
          transactionType
          staffUserId
          userId
          tools
          materials
          reservationSlots
          requests
          transactionStatus
          transactionComment
          createdAt
          updatedAt
          version
        }
        transactionRecordId
        toolType
        updatedAt
        createdAt
      }
      workstationId
      conductRecord
      conductStatus
      reservations {
        items {
          id
          time
          userId
          toolId
          transactionGroup
          createdAt
          updatedAt
        }
        nextToken
      }
      transactionRecord {
        items {
          id
          transactionType
          staffUserId
          userId
          tools
          materials
          reservationSlots
          requests
          transactionStatus
          transactionComment
          createdAt
          updatedAt
          version
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTool = /* GraphQL */ `
  subscription OnCreateTool {
    onCreateTool {
      id
      name
      description
      location
      group {
        name
        count
        toolType
        tools {
          nextToken
        }
        createdAt
        updatedAt
      }
      toolStatus
      currentHolder {
        id
        firstName
        lastName
        phone
        signInStatus
        email
        itemRecord {
          nextToken
        }
        workstation {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        workstationId
        conductRecord
        conductStatus
        reservations {
          nextToken
        }
        transactionRecord {
          nextToken
        }
        createdAt
        updatedAt
      }
      currentHolderId
      currentWorkstation {
        id
        name
        description
        location
        group {
          name
          count
          toolType
          createdAt
          updatedAt
        }
        toolStatus
        currentHolder {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        currentHolderId
        currentWorkstation {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        currentWorkstationId
        reservations {
          nextToken
        }
        transactionRecord {
          id
          transactionType
          staffUserId
          userId
          tools
          materials
          reservationSlots
          requests
          transactionStatus
          transactionComment
          createdAt
          updatedAt
          version
        }
        transactionRecordId
        toolType
        updatedAt
        createdAt
      }
      currentWorkstationId
      reservations {
        items {
          id
          time
          userId
          toolId
          transactionGroup
          createdAt
          updatedAt
        }
        nextToken
      }
      transactionRecord {
        id
        transactionType
        staffUser {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        staffUserId
        user {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        userId
        tools
        materials
        reservations {
          nextToken
        }
        reservationSlots
        requests
        transactionStatus
        transactionComment
        createdAt
        updatedAt
        version
      }
      transactionRecordId
      toolType
      updatedAt
      createdAt
    }
  }
`;
export const onUpdateTool = /* GraphQL */ `
  subscription OnUpdateTool {
    onUpdateTool {
      id
      name
      description
      location
      group {
        name
        count
        toolType
        tools {
          nextToken
        }
        createdAt
        updatedAt
      }
      toolStatus
      currentHolder {
        id
        firstName
        lastName
        phone
        signInStatus
        email
        itemRecord {
          nextToken
        }
        workstation {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        workstationId
        conductRecord
        conductStatus
        reservations {
          nextToken
        }
        transactionRecord {
          nextToken
        }
        createdAt
        updatedAt
      }
      currentHolderId
      currentWorkstation {
        id
        name
        description
        location
        group {
          name
          count
          toolType
          createdAt
          updatedAt
        }
        toolStatus
        currentHolder {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        currentHolderId
        currentWorkstation {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        currentWorkstationId
        reservations {
          nextToken
        }
        transactionRecord {
          id
          transactionType
          staffUserId
          userId
          tools
          materials
          reservationSlots
          requests
          transactionStatus
          transactionComment
          createdAt
          updatedAt
          version
        }
        transactionRecordId
        toolType
        updatedAt
        createdAt
      }
      currentWorkstationId
      reservations {
        items {
          id
          time
          userId
          toolId
          transactionGroup
          createdAt
          updatedAt
        }
        nextToken
      }
      transactionRecord {
        id
        transactionType
        staffUser {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        staffUserId
        user {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        userId
        tools
        materials
        reservations {
          nextToken
        }
        reservationSlots
        requests
        transactionStatus
        transactionComment
        createdAt
        updatedAt
        version
      }
      transactionRecordId
      toolType
      updatedAt
      createdAt
    }
  }
`;
export const onDeleteTool = /* GraphQL */ `
  subscription OnDeleteTool {
    onDeleteTool {
      id
      name
      description
      location
      group {
        name
        count
        toolType
        tools {
          nextToken
        }
        createdAt
        updatedAt
      }
      toolStatus
      currentHolder {
        id
        firstName
        lastName
        phone
        signInStatus
        email
        itemRecord {
          nextToken
        }
        workstation {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        workstationId
        conductRecord
        conductStatus
        reservations {
          nextToken
        }
        transactionRecord {
          nextToken
        }
        createdAt
        updatedAt
      }
      currentHolderId
      currentWorkstation {
        id
        name
        description
        location
        group {
          name
          count
          toolType
          createdAt
          updatedAt
        }
        toolStatus
        currentHolder {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        currentHolderId
        currentWorkstation {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        currentWorkstationId
        reservations {
          nextToken
        }
        transactionRecord {
          id
          transactionType
          staffUserId
          userId
          tools
          materials
          reservationSlots
          requests
          transactionStatus
          transactionComment
          createdAt
          updatedAt
          version
        }
        transactionRecordId
        toolType
        updatedAt
        createdAt
      }
      currentWorkstationId
      reservations {
        items {
          id
          time
          userId
          toolId
          transactionGroup
          createdAt
          updatedAt
        }
        nextToken
      }
      transactionRecord {
        id
        transactionType
        staffUser {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        staffUserId
        user {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        userId
        tools
        materials
        reservations {
          nextToken
        }
        reservationSlots
        requests
        transactionStatus
        transactionComment
        createdAt
        updatedAt
        version
      }
      transactionRecordId
      toolType
      updatedAt
      createdAt
    }
  }
`;
export const onCreateTraining = /* GraphQL */ `
  subscription OnCreateTraining {
    onCreateTraining {
      id
      name
      duration
      capacity
      reservations {
        items {
          id
          time
          userId
          toolId
          transactionGroup
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTraining = /* GraphQL */ `
  subscription OnUpdateTraining {
    onUpdateTraining {
      id
      name
      duration
      capacity
      reservations {
        items {
          id
          time
          userId
          toolId
          transactionGroup
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTraining = /* GraphQL */ `
  subscription OnDeleteTraining {
    onDeleteTraining {
      id
      name
      duration
      capacity
      reservations {
        items {
          id
          time
          userId
          toolId
          transactionGroup
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMaterial = /* GraphQL */ `
  subscription OnCreateMaterial {
    onCreateMaterial {
      id
      name
      transactionRecord {
        id
        transactionType
        staffUser {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        staffUserId
        user {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        userId
        tools
        materials
        reservations {
          nextToken
        }
        reservationSlots
        requests
        transactionStatus
        transactionComment
        createdAt
        updatedAt
        version
      }
      price
      count
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMaterial = /* GraphQL */ `
  subscription OnUpdateMaterial {
    onUpdateMaterial {
      id
      name
      transactionRecord {
        id
        transactionType
        staffUser {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        staffUserId
        user {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        userId
        tools
        materials
        reservations {
          nextToken
        }
        reservationSlots
        requests
        transactionStatus
        transactionComment
        createdAt
        updatedAt
        version
      }
      price
      count
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMaterial = /* GraphQL */ `
  subscription OnDeleteMaterial {
    onDeleteMaterial {
      id
      name
      transactionRecord {
        id
        transactionType
        staffUser {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        staffUserId
        user {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        userId
        tools
        materials
        reservations {
          nextToken
        }
        reservationSlots
        requests
        transactionStatus
        transactionComment
        createdAt
        updatedAt
        version
      }
      price
      count
      createdAt
      updatedAt
    }
  }
`;
export const onCreateInventory = /* GraphQL */ `
  subscription OnCreateInventory {
    onCreateInventory {
      name
      count
      toolType
      tools {
        items {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateInventory = /* GraphQL */ `
  subscription OnUpdateInventory {
    onUpdateInventory {
      name
      count
      toolType
      tools {
        items {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteInventory = /* GraphQL */ `
  subscription OnDeleteInventory {
    onDeleteInventory {
      name
      count
      toolType
      tools {
        items {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateReservation = /* GraphQL */ `
  subscription OnCreateReservation {
    onCreateReservation {
      id
      time
      user {
        id
        firstName
        lastName
        phone
        signInStatus
        email
        itemRecord {
          nextToken
        }
        workstation {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        workstationId
        conductRecord
        conductStatus
        reservations {
          nextToken
        }
        transactionRecord {
          nextToken
        }
        createdAt
        updatedAt
      }
      userId
      tool {
        id
        name
        description
        location
        group {
          name
          count
          toolType
          createdAt
          updatedAt
        }
        toolStatus
        currentHolder {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        currentHolderId
        currentWorkstation {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        currentWorkstationId
        reservations {
          nextToken
        }
        transactionRecord {
          id
          transactionType
          staffUserId
          userId
          tools
          materials
          reservationSlots
          requests
          transactionStatus
          transactionComment
          createdAt
          updatedAt
          version
        }
        transactionRecordId
        toolType
        updatedAt
        createdAt
      }
      toolId
      training {
        id
        name
        duration
        capacity
        reservations {
          nextToken
        }
        createdAt
        updatedAt
      }
      transactionGroup
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateReservation = /* GraphQL */ `
  subscription OnUpdateReservation {
    onUpdateReservation {
      id
      time
      user {
        id
        firstName
        lastName
        phone
        signInStatus
        email
        itemRecord {
          nextToken
        }
        workstation {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        workstationId
        conductRecord
        conductStatus
        reservations {
          nextToken
        }
        transactionRecord {
          nextToken
        }
        createdAt
        updatedAt
      }
      userId
      tool {
        id
        name
        description
        location
        group {
          name
          count
          toolType
          createdAt
          updatedAt
        }
        toolStatus
        currentHolder {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        currentHolderId
        currentWorkstation {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        currentWorkstationId
        reservations {
          nextToken
        }
        transactionRecord {
          id
          transactionType
          staffUserId
          userId
          tools
          materials
          reservationSlots
          requests
          transactionStatus
          transactionComment
          createdAt
          updatedAt
          version
        }
        transactionRecordId
        toolType
        updatedAt
        createdAt
      }
      toolId
      training {
        id
        name
        duration
        capacity
        reservations {
          nextToken
        }
        createdAt
        updatedAt
      }
      transactionGroup
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteReservation = /* GraphQL */ `
  subscription OnDeleteReservation {
    onDeleteReservation {
      id
      time
      user {
        id
        firstName
        lastName
        phone
        signInStatus
        email
        itemRecord {
          nextToken
        }
        workstation {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        workstationId
        conductRecord
        conductStatus
        reservations {
          nextToken
        }
        transactionRecord {
          nextToken
        }
        createdAt
        updatedAt
      }
      userId
      tool {
        id
        name
        description
        location
        group {
          name
          count
          toolType
          createdAt
          updatedAt
        }
        toolStatus
        currentHolder {
          id
          firstName
          lastName
          phone
          signInStatus
          email
          workstationId
          conductRecord
          conductStatus
          createdAt
          updatedAt
        }
        currentHolderId
        currentWorkstation {
          id
          name
          description
          location
          toolStatus
          currentHolderId
          currentWorkstationId
          transactionRecordId
          toolType
          updatedAt
          createdAt
        }
        currentWorkstationId
        reservations {
          nextToken
        }
        transactionRecord {
          id
          transactionType
          staffUserId
          userId
          tools
          materials
          reservationSlots
          requests
          transactionStatus
          transactionComment
          createdAt
          updatedAt
          version
        }
        transactionRecordId
        toolType
        updatedAt
        createdAt
      }
      toolId
      training {
        id
        name
        duration
        capacity
        reservations {
          nextToken
        }
        createdAt
        updatedAt
      }
      transactionGroup
      createdAt
      updatedAt
    }
  }
`;
export const onCreateShop = /* GraphQL */ `
  subscription OnCreateShop {
    onCreateShop {
      id
      name
      openingTime
      closingTime
      description
      requiredTrainings {
        id
        name
        duration
        capacity
        reservations {
          nextToken
        }
        createdAt
        updatedAt
      }
      studentMessage
      staffMessage
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateShop = /* GraphQL */ `
  subscription OnUpdateShop {
    onUpdateShop {
      id
      name
      openingTime
      closingTime
      description
      requiredTrainings {
        id
        name
        duration
        capacity
        reservations {
          nextToken
        }
        createdAt
        updatedAt
      }
      studentMessage
      staffMessage
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteShop = /* GraphQL */ `
  subscription OnDeleteShop {
    onDeleteShop {
      id
      name
      openingTime
      closingTime
      description
      requiredTrainings {
        id
        name
        duration
        capacity
        reservations {
          nextToken
        }
        createdAt
        updatedAt
      }
      studentMessage
      staffMessage
      createdAt
      updatedAt
    }
  }
`;
